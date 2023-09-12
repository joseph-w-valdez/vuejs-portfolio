<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'dark';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'dark';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase" >
				Hi, I'm Joseph!
			</h1>
			<p class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400" >
				Full-Stack Web Developer
			</p>
			<!-- CV button -->
			<div class="flex justify-center sm:block">
				<a
					target='_blank'
					rel="noopener noreferrer"
					href="/files/Joseph Valdez - Resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<span class="text-sm sm:text-lg font-general-medium duration-100" >
						View My Resume!
					</span>
				</a
				>
			</div>
			<div class="flex justify-center sm:block">
				<a
					href="/contact"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Contact Me"
				>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Contact Me!</span
					></a
				>
			</div>

		</div>
		<div class="flex justify-center items-center w-full md:w-2/3 text-right float-right">
			<img
				src="@/assets/images/profile.jpg"
				alt="Profile Picture"
				class='rounded-xl mt-8 shadow-xl'
			/>
		</div>
	</section>
</template>

<style scoped></style>
