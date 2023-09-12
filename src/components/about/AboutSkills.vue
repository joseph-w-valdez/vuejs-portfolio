<script>
import skills from '../../data/skills';

export default {
  data: () => {
    return {
      skills,
    };
  },
}
</script>

<template>
  <div class="flex-col sm:flex sm:gap-10 sm:mt-20 text-center justify-center">
    <p class="font-general-semibold text-2xl sm:text-5xl font-semibold text-ternary-dark dark:text-ternary-light mb-8">
      Skills
    </p>
    <div class="skills-container flex flex-wrap justify-center gap-4 sm:gap-8">
      <a
        v-for="skill in skills"
        :key="skill.id"
        class="skill text-ternary-dark dark:text-ternary-white no-underline border-2 border-[#6366F1] rounded-xl p-4 hover:bg-[#6366F1] hover:text-white duration-500"
        :href="skill.website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 class="text-xl font-semibold text-ternary-dark dark:text-ternary-light">
          {{ skill.title }}
        </h3>
        <div class="skill-logo-frame w-[7rem]">
          <img
            :src="skill.logo"
            :alt="skill.title"
          />
        </div>
      </a>
    </div>
  </div>
</template>
