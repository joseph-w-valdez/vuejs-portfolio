<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<div class="w-full sm:w-1/3 text-left">
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2" >
						{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
						<li
								v-for="info in projectInfo.links"
								:key="info.title"
								class="font-general-regular text-ternary-dark dark:text-ternary-light"
						>
								<span class="block text-base italic">{{ info.title }}: </span>
								<!-- Render a <p> if the link is unavailable, otherwise render an <a> tag for linking-->
								<template v-if="info.link">
									<a :href="info.link" class="hover:underline cursor-pointer block text-md overflow-hidden truncate" aria-label="Project Website and Repository" target="__blank" rel="noopener noreferrer">{{ info.link }}</a>
								</template>
								<template v-else>
									<p class="text-md">None Available</p>
								</template>
						</li>
				</ul>
		</div>

			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2" >
					Tools and Technologies
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light" >
					{{ projectInfo.technologies && projectInfo.technologies.length ? projectInfo.technologies.join(', ') : 'No technologies specified' }}
				</p>
			</div>
		</div>

		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				Objective
			</p>
			<p class="font-general-regular text-primary-dark dark:text-ternary-light mb-7" >
				{{ projectInfo.objectives1 }}
			</p>
			<p class="font-general-regular text-primary-dark dark:text-ternary-light mb-7" >
				{{ projectInfo.objectives2 }}
			</p>

			<div class="mb-7">
				<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7" >
					Challenges
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light mb-7" >
					{{ projectInfo.challenges1 }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light mb-7" >
					{{ projectInfo.challenges2 }}
				</p>
			</div>
		</div>
	</div>
</template>
