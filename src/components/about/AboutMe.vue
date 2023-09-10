<script>
import AboutSkills from './AboutSkills.vue'

export default {
	components: {
		AboutSkills,
	},
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						"I am a software engineer in Southern California. I'd love to contribute to any projects and applications that have a positive impact on the community.",
				},
				{
					id: 2,
					bio:
						"Before entering the tech industry, I worked in the healthcare field for several years. Over this time, I gained a strong work ethic, with great admiration for the strong teamwork, coordination, and problem-solving that it entailed. I was introduced to the software development world by friends who suggested it due to its similarities to the medical field in the ways that I loved it.",
				},
				{
					id: 3,
					bio:
						"After months of soul-searching, self-studying, and research into the field, I decided to delve into it further and immerse myself in a boot camp program, and I have continued loving it since!",
				},
				{
					id: 4,
					bio:
						"I'm excited to keep moving forward in this industry and solving problems with a like-minded group of teammates and continuing this path of ongoing growth!",
				},
			],
		};
	},
};
</script>

<template>
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
<AboutSkills />
</template>
