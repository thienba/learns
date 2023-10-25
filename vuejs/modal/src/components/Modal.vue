<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full flex justify-center items-center bg-gray-600/50"
    @click.self="clickOutsideModal"
  >
    <div class="relative w-full max-w-2xl max-h-full z-10">
      <div
        class="relative rounded-lg shadow bg-gray-700"
        :class="{ 'bg-yellow-700': theme === 'sales' }"
      >
        <slot name="modal-header" />
        <div class="p-6 space-y-6 text-white">
          <slot />
        </div>
        <slot name="modal-footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "example",
      validator(val) {
        return ["example", "sales", "contact"].includes(val);
      },
    },
  },
  data() {},
  methods: {
    clickOutsideModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style></style>
