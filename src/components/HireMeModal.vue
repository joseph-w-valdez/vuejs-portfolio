<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
import submitForm from '../utilities/formSubmission';

export default {
  props: ['showModal', 'modal', 'categories'],
  components: { Button },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      isSubmitting: false,
      submitMessage: '',
    };
  },
  watch: {
    // Watch the 'modal' prop for changes
    modal(newVal, oldVal) {
      if (!newVal && oldVal) {
        // If the modal was closed, reset 'isSubmitting' to false
        this.isSubmitting = false;
        this.submitMessage = ''; // Reset the submitMessage as well
      }
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {
    async submitForm() {
      if (this.isSubmitting) {
        return;
      }

      this.isSubmitting = true;
      try {
        await submitForm(this.formData);
        this.submitMessage = 'Email Sent!';
        this.resetForm();
      } catch (error) {
        console.error(error);
        this.submitMessage = 'Error sending email. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.subject = '';
      this.formData.message = '';
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
           <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
      ></div>
      <main class="flex flex-col items-center justify-center w-full h-full">
        <transition name="fade-up-down">
          <div
            v-show="modal"
            class="modal-wrapper flex items-center z-30"
          >
            <div class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
              <div class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                  What project are you looking for?
                </h5>
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <i data-feather="x"></i>
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full overflow-y-scroll">
                <form @submit.prevent="submitForm" class="max-w-xl m-4 text-left">
                  <div class="mb-4">
                    <p v-if="submitMessage === 'Email Sent!'" class="text-green-500">Email Sent! Thank you!</p>
                    <p v-else-if="submitMessage === 'Error sending email. Please try again.'" class="text-red-500">Error sending email. Please try again.</p>
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      v-model="formData.name"
                      id="full-name"
                      inputIdentifier="name"
                      name="full-name"
                      placeholder="Full Name"
                      class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                      aria-label="Full Name"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      v-model="formData.email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      inputType="email"
                      class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                      aria-label="Email"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="project"
                    >
                      Project Type
                    </label>
                    <select
                      v-model="formData.subject"
                      class="w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="project"
                      name="project"
                      type="text"
                      required=""
                      aria-label="Project Category"
                    >
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.value"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="details"
                    >
                      Details
                    </label>
                    <textarea
                      v-model="formData.message"
                      class="min-h-[50px] w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                      id="details"
                      name="details"
                      placeholder="Details"
                      aria-label="Details"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-7 pb-4 sm:pb-1">
                    <Button
                      :title="isSubmitting ? 'Please Wait...' : 'Send Message'"
                      class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 hover:text-[#6366F1] hover:bg-white duration-500"
                      type="submit"
                      aria-label="Submit Request"
                      :disabled="isSubmitting"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right" >
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style scoped>
.modal-body {
	max-height: 570px;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
