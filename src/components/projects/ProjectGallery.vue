<script>
export default {
	props: ['projectImages'],
};
</script>

<template>
	<div class="flex flex-col sm:flex-row sm:justify-evenly sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0 w-full flex justify-center"
			v-for="projectImage in projectImages"
			:key="projectImage.id"
		>
			<img
				:src="projectImage"
				class="rounded-xl shadow-lg sm:shadow-none max-h-[350px]"
				alt="{{ projectImage.title }}"
			/>
		</div>
	</div>
</template>
