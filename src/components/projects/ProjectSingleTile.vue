<script>
export default {
	props: ['project'],
};


</script>

<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="rounded-xl shadow-lg group cursor-pointer mb-10 sm:mb-0 relative"
    aria-label="Single Project"
  >
    <div>
      <img :src="project.thumbnail" :alt="project.title" class="rounded-t-xl border-none max-h-[227px]" />
    </div>
    <div class="text-center px-4 py-6 rounded-b-xl shadow-lg bg-secondary-light dark:bg-ternary-dark group-hover:bg-[#6366F1] ">
      <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2 group-hover:text-white">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light group-hover:text-white">{{ project.categories[0] }}</span>
    </div>
  </router-link>
</template>




<style lang="scss" scoped></style>
