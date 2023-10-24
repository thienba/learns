<template>
  <header-app ref="headerRef" />
  <teleport to="body">
    <modal
    v-if="isShowModal"
    title="This is the title from APP component"
    @closeModal="toggleModal"
  >
    <template v-slot:modal-header>
      <div
        class="flex items-start justify-between p-4 border-b rounded-t border-gray-600"
      >
        <h3 class="text-xl font-semibold text-white">
          {{ title }}
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
          @click="toggleModal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
    </template>

    <template v-slot>
      <h1 class="text-2xl font-bold">Modal content</h1>
      <p class="!mt-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus
        accusantium nobis minima eos officia illum maxime temporibus distinctio ipsa.
      </p>
    </template>

    <template v-slot:modal-footer>
      <div
        class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b border-gray-600"
      >
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Confirm
        </button>
        <button
          @click="toggleModal"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
        >
          Cancel
        </button>
      </div>
    </template>
  </modal>

  </teleport>
  <div class="flex justify-center">
    <button
      class="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      @click="toggleModal"
    >
      Toggle modal
    </button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    HeaderApp: Header,
    Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>
