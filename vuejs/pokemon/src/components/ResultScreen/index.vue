<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-[#f3f3f3] text-center">
    <h1 class="text-[80px] font-bold">✨ Congratulations ✨</h1>
    <p class="text-[48px] font-bold">{{ timer }} seconds</p>
    <button
      class="border border-[#f3f3f3] rounded-lg cursor-pointer px-[20px] py-[16px] hover:bg-[#f3f3f3] hover:text-[#212121] transition-all duration-500"
      @click="onRestartGame"
    >
      Start Again
    </button>
  </div>
</template>
<script>
export default {
  props: {
    timer: {
      type: Number,
    },
  },
  methods: {
    onRestartGame() {
      this.$emit("onRestartGame");
    },
  },
};
</script>
<style></style>
