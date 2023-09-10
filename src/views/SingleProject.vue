<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import projectsData from '../data/projects'

export default {
  name: 'SingleProject',
  props: ['project'],
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data() {
    return {
      projectId: null,
      projectDetails: {
        header: {},
        images: [],
        info: {
          clientHeading: '',
          links: [],
          technologies: [],
        },
      },
    };
  },
  watch: {
    projectId: 'fetchProjectDetails',
  },
  mounted() {
    feather.replace();
    this.projectId = Number(this.$route.params.projectId);
  },
  methods: {
    fetchProjectDetails() {
      const project = projectsData.find((item) => item.id === this.projectId);

      if (project) {
        this.projectDetails.header = { ...project };
        this.projectDetails.images = project.images;

        this.projectDetails.info.clientHeading = 'Check It Out!';
        this.projectDetails.info.links = [
          {
            id: 1,
            title: 'Live Link',
            link: project.liveLink,
          },
          {
            id: 2,
            title: 'Repository',
            link: project.repoLink,
          },
        ];
        this.projectDetails.info.objectives = project.objectives;
        this.projectDetails.info.technologies = project.technologies;
        this.projectDetails.info.challenges = project.challenges;
      }
    },
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <ProjectHeader :singleProjectHeader="projectDetails.header" />
    <ProjectGallery :projectImages="projectDetails.images" />
    <ProjectInfo :projectInfo="projectDetails.info" />
  </div>
</template>
