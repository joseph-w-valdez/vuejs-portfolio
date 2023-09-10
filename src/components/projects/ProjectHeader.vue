<script>
export default {
	props: ['singleProjectHeader'],
	mounted() {
		console.log(this.singleProjectHeader.categories)
	}
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<p
			class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
		>
			{{ singleProjectHeader.title }}
		</p>
		<div class="flex">
			<div class="flex items-center mr-10">
				<i
					data-feather="clock"
					class="w-[16px] h-[16px] text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>Published: {{ singleProjectHeader.date }}</span
				>
			</div>
			<div class="flex items-center">
				<i
					data-feather="tag"
					class="w-[16px] h-[16px] text-ternary-dark dark:text-ternary-light"
				></i>
				<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light w-1/2 sm:w-fit">
					Categories: {{ singleProjectHeader.categories && singleProjectHeader.categories.length ? singleProjectHeader.categories.join(',  ') : 'No categories specified' }}
					</span
				>
			</div>
		</div>
	</div>
</template>
