<script>
export default {
	props: ['project'],
};


</script>

<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img :src="project.thumbnail" :alt="project.title" class="rounded-t-xl border-none" />
    </div>
    <div class="text-center px-4 py-6">
      <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category }}</span>

      <!-- Display additional project details here -->
      <div class="mt-4">
        <h3 class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">Date:</h3>
        <p class="text-ternary-dark dark:text-ternary-light">{{ project.date}}</p>

        <!-- You can add more details like client, objectives, technologies, etc. here -->
      </div>
    </div>
  </router-link>
</template>


<style lang="scss" scoped></style>
