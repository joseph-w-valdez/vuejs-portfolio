<script>
import Button from '../reusable/Button.vue';

export default {
  components: { Button },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form data:', this.formData);
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
        Contact Form
      </p>
      <form @submit.prevent="submitForm" class="font-general-regular space-y-7">
        <input
          label="Full Name"
          v-model="formData.name"
          id="full-name"
          name="full-name"
          placeholder="Full Name"
          class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          aria-label="Full Name"
        />
        <input
          label="Email"
          v-model="formData.email"
          id="email"
          name="email"
          placeholder="Email Address"
          inputType="email"
          class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          aria-label="Email"
        />
        <input
          label="Subject"
          v-model="formData.subject"
          id="subject"
          name="subject"
          placeholder="Subject"
          class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          aria-label="Subject"
        />
        <textarea
          class="min-h-[50px] w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          label="Message"
          v-model="formData.message"
          id="message"
          name="message"
          placeholder="Message"
          aria-label="Message"
        ></textarea>
        <div>
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
