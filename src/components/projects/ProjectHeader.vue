<script>
import Button from '../reusable/Button.vue';

export default {
	components: { Button },
	props: ['singleProjectHeader'],
};
</script>

<template>
	<div>
		<div class="flex justify-between items-center mt-14 sm:mt-20 mb-7">
			<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light " >
				{{ singleProjectHeader.title }}
			</p>
			<router-link to="/projects">
        <Button
          title="Back"
          class="h-10 w-16 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg hover:text-[#6366F1] hover:bg-white duration-500"
          aria-label="Back"
        >
        </Button>
      </router-link>
		</div>
		<div class="flex gap-4">
			<div class="flex items-center">
				<i
					data-feather="clock"
					class="w-[16px] h-[16px] min-h-[16px] min-w-[16px] text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>Published: {{ singleProjectHeader.date }}</span
				>
			</div>
			<div class="flex items-center justify-center">
				<i
					data-feather="tag"
					class="w-[16px] h-[16px] min-h-[16px] min-w-[16px] text-ternary-dark dark:text-ternary-light"
				></i>
				<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">
					Categories: {{ singleProjectHeader.categories && singleProjectHeader.categories.length ? singleProjectHeader.categories.join(',  ') : 'No categories specified' }}
					</span
				>
			</div>
		</div>
	</div>
</template>
