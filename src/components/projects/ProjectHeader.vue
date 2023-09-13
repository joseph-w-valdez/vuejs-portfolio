<script>
import 'feather-icons';

export default {
	props: ['singleProjectHeader'],
};
</script>

<template>
	<div>
		<div class="flex gap-8 justify-start items-center mt-14 sm:mt-20 mb-7">
		<router-link to="/projects">
        <button
          class="h-10 w-10 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-full hover:text-[#6366F1] hover:bg-white duration-500 flex items-center justify-center"
          aria-label="Back"
        >
          <i data-feather="arrow-left"></i>
        </button>
      </router-link>
			<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light " >
				{{ singleProjectHeader.title }}
			</p>

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
