<script>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
import { socialLinks } from '../../data/socialLinks';

export default {
	components: { FooterCopyright },
	data() {
		return {
			socials: socialLinks,
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
	<div class="container mx-auto">
		<div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark" >
			<div class="flex flex-col justify-center items-center mb-12 sm:mb-20" >
				<p class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5" >
					Follow me
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
						class="flex justify-center items-center p-4 text-lg border border-indigo-200 dark:border-ternary-dark shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					>
						<i
							:data-feather="social.icon"
							class="w-5 sm:w-8 h-5 sm:h-8"
						></i>
					</a>
				</ul>
			</div>
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped></style>
