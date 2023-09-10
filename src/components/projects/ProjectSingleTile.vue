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
    <div class='h-[260px] w-[260px] border-2 border-ternary-dark dark:border-white rounded-tl-xl rounded-tr-xl border-b-0 overflow-hidden'>
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="border-none object-cover w-full h-full"
      />
    </div>
    <div class="text-center px-4 py-6 border border-2 border-t-0 border-ternary-dark dark:border-white rounded-b-xl shadow-lg bg-secondary-light dark:bg-ternary-dark group-hover:bg-[#6366F1] w-[260px]">
      <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2 group-hover:text-white">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light group-hover:text-white">{{ project.categories[0] }}</span>
    </div>
  </router-link>
</template>




<style lang="scss" scoped></style>
