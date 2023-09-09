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
          companyInfos: [],
          objectivesHeading: '',
          objectivesDetails: '',
          technologies: [],
          projectDetailsHeading: '',
          projectDetails: [],
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
      console.log(project)
      if (project) {
        this.projectDetails.header = { ...project };
        this.projectDetails.images = project.images;

        this.projectDetails.info.clientHeading = 'About Client';
        this.projectDetails.info.companyInfos = [
          {
            id: 1,
            title: 'Services',
            details: project.liveLink,
          },
          {
            id: 2,
            title: 'Live Link',
            details: project.liveLink,
          },
          {
            id: 3,
            title: 'Repository',
            details: project.repoLink,
          },
        ];

        this.projectDetails.info.objectivesHeading = 'Objective';
        this.projectDetails.info.objectivesDetails = project.objectives;

        this.projectDetails.info.technologies.push({
          title: 'Tools & Technologies',
          techs: project.technologies,
        });

        this.projectDetails.info.projectDetails.push({
          id: 1,
          details: project.challenge,
        });
      }
    },
  },
};
</script>
