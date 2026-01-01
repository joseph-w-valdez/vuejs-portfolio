<script>
import AboutHobbies from './AboutHobbies.vue'
import AboutSkills from './AboutSkills.vue'

export default {
	components: {
		AboutHobbies,
		AboutSkills,
	},
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						"I’m a Software Engineer Technical Lead based in Southern California, focused on building reliable, maintainable systems in high-constraint environments. I’m especially drawn to projects that prioritize long-term impact, accessibility, and correctness.",
				},
				{
					id: 2,
					bio:
						"Before working in software, I spent several years in healthcare, where I developed a strong appreciation for teamwork, coordination, and problem-solving under real-world constraints. That background continues to shape how I approach engineering, particularly when systems need to be predictable, safe, and user-centered.",
				},
				{
					id: 3,
					bio:
						"In my current work, I’ve contributed to and led efforts spanning cross-platform browser extensions, AI-powered integrations, accessibility remediation, and deployment architecture supporting millions of users. I enjoy solving complex problems with thoughtful teams and working on systems that need to hold up over time.",
				},
				{
					id: 4,
					bio:
						"I’m motivated by ongoing learning and thoughtful experimentation, especially when it leads to systems that are reliable, responsible, and built to last.",
				},
			],
		};
	},
};
</script>

<template>
	<p class="font-general-semibold text-2xl sm:text-5xl font-semibold text-ternary-dark dark:text-ternary-light">
      Bio
    </p>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt="Profile Picture"
			/>
		</div>
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
	<AboutHobbies />
	<AboutSkills />
</template>
