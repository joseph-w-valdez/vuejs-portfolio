<script>
import feather from 'feather-icons';
import ExperienceItem from './ExperienceItem.vue';
import experiences from '../../data/experiences';

export default {
	name: 'ExperienceSection',
	components: {
		ExperienceItem,
	},
	data: () => {
		return {
			experiences,
			sectionHeading: 'Professional Experience',
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<section class="pt-10 sm:pt-14">
		<div class="text-center mb-12 sm:mb-16">
			<p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				{{ sectionHeading }}
			</p>
		</div>
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
			<ExperienceItem
				v-for="experience in experiences"
				:key="experience.id"
				:experience="experience"
			/>
		</div>
	</section>
</template>

<style scoped></style>
