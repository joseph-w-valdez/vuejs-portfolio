<script>
import feather from 'feather-icons';
import experiences from '../../data/experiences';

export default {
	name: 'ExperiencePreview',
	data: () => {
		return {
			experiences,
			sectionHeading: 'Professional Experience',
		};
	},
	methods: {
		getSummary(experience) {
			// Generate a single-line summary based on the role
			if (experience.id === 1) {
				// Technical Lead role
				return 'Led cross-platform extension architecture across Chrome, Safari, and iOS, serving 2M+ users across 20+ partner brands. Architected AI integration systems for ChatGPT, Gemini, and Claude, and provided technical leadership across multiple teams.';
			} else if (experience.id === 2) {
				// Software Engineer role
				return 'Delivered features across 20+ partner-branded browser extensions with 2M+ users. Achieved WCAG 2.1 AA accessibility compliance, rebuilt cross-platform templates for code parity, and expanded CI/CD automation pipelines.';
			}
			// Fallback
			return experience.achievements[0].description[0];
		},
		getSkills(experience) {
			// Return skills/tech based on the role, ordered by usefulness and experience level
			if (experience.id === 1) {
				// Technical Lead role - ordered by core tech → platforms → specialized → leadership
				return ['TypeScript', 'React', 'JavaScript', 'Chrome Extensions', 'Safari Extensions', 'iOS Safari', 'Swift', 'AI Integration', 'Architecture', 'Technical Leadership'];
			} else if (experience.id === 2) {
				// Software Engineer role - ordered by core tech → platforms → specialized work → tooling
				return ['TypeScript', 'React', 'Chrome Extensions', 'Safari Extensions', 'Accessibility', 'WCAG 2.1', 'Cross-Platform', 'CI/CD', 'GitHub Actions'];
			}
			return [];
		},
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
			<div
				v-for="experience in experiences"
				:key="experience.id"
				class="mb-12 sm:mb-16"
			>
				<div class="flex gap-6">
					<!-- Left Sidebar for Timeline -->
					<div class="hidden sm:flex flex-col items-center flex-shrink-0 w-16">
						<div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 flex items-center justify-center shadow-lg mb-4">
							<i data-feather="briefcase" class="w-6 h-6 text-white"></i>
						</div>
						<div class="flex-1 w-0.5 bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-300 dark:from-indigo-700 dark:via-indigo-600 dark:to-indigo-700 rounded-full"></div>
					</div>

					<!-- Main Content Card -->
					<div class="flex-1 bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-lg border-l-4 border-indigo-500 dark:border-indigo-400 p-6 sm:p-8 experience-card-shadow">
						<!-- Header -->
						<div class="mb-6">
							<div class="flex flex-wrap items-center justify-between gap-3 mb-3">
								<h3 class="font-general-semibold text-2xl sm:text-3xl text-ternary-dark dark:text-ternary-light">
									{{ experience.position }}
								</h3>
								<span class="px-3 py-1 text-sm font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 rounded-md border border-indigo-200 dark:border-indigo-800">
									{{ experience.company }}
								</span>
							</div>
							
							<!-- Skills/Tech Tags -->
							<div class="flex flex-wrap gap-2 mb-3">
								<span
									v-for="(skill, index) in getSkills(experience)"
									:key="index"
									class="px-3 py-1 text-xs font-semibold text-indigo-50 dark:text-indigo-900 bg-indigo-700 dark:bg-indigo-300 rounded-md border border-indigo-600 dark:border-indigo-400"
								>
									{{ skill }}
								</span>
							</div>
							
							<p class="font-general-medium text-sm text-gray-600 dark:text-gray-400 flex items-center">
								<i data-feather="calendar" class="w-4 h-4 mr-2 text-indigo-500"></i>
								{{ experience.duration }}
							</p>
						</div>

						<!-- Single-line Summary -->
						<p class="text-left text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
							{{ getSummary(experience) }}
						</p>

						<!-- View Full Details Link -->
						<div class="pt-4 border-t border-indigo-100 dark:border-indigo-900/30">
							<router-link
								to="/experience"
								class="inline-flex items-center justify-center bg-indigo-500 hover:bg-primary-light text-white hover:text-[#6366F1] font-general-medium text-md px-4 py-2.5 rounded-md shadow-sm duration-500"
							>
								View full experience details
								<i data-feather="arrow-right" class="w-4 h-4 ml-2"></i>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.experience-card-shadow {
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 -10px 15px -3px rgba(99, 102, 241, 0.1);
}

.dark .experience-card-shadow {
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}
</style>
