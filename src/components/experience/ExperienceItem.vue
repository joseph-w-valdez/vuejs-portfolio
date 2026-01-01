<script>
import feather from 'feather-icons';

export default {
	props: {
		experience: {
			type: Object,
			required: true,
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
	<div class="mb-12 sm:mb-16">
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
				<div class="mb-8">
					<div class="flex flex-wrap items-center justify-between gap-3 mb-3">
						<h3 class="font-general-semibold text-2xl sm:text-3xl text-ternary-dark dark:text-ternary-light">
							{{ experience.position }}
						</h3>
						<span class="px-3 py-1 text-sm font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 rounded-md border border-indigo-200 dark:border-indigo-800">
							{{ experience.company }}
						</span>
					</div>
					<p class="font-general-medium text-sm text-gray-600 dark:text-gray-400 flex items-center">
						<i data-feather="calendar" class="w-4 h-4 mr-2 text-indigo-500"></i>
						{{ experience.duration }}
					</p>
				</div>

				<!-- Achievements -->
				<div class="space-y-8">
					<div
						v-for="(achievement, index) in experience.achievements"
						:key="index"
						class="achievement-block bg-white/50 dark:bg-gray-800/30 rounded-lg p-5 border border-indigo-100 dark:border-indigo-900/30 text-left"
					>
						<h4 class="font-general-semibold text-lg text-ternary-dark dark:text-ternary-light mb-4 flex items-center gap-2">
							<span class="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
							{{ achievement.title }}
						</h4>
						<ul class="space-y-2.5 font-general-regular ml-4 text-left">
							<li
								v-for="(desc, descIndex) in achievement.description"
								:key="descIndex"
								class="text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left"
							>
								<span class="text-indigo-500 dark:text-indigo-400 mr-2">•</span>{{ desc }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.achievement-block:last-child {
	margin-bottom: 0;
}

.experience-card-shadow {
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 -10px 15px -3px rgba(99, 102, 241, 0.1);
}

.dark .experience-card-shadow {
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}
</style>
