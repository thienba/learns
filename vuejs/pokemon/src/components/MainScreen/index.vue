<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-[#f3f3f3]">
    <h1 class="text-[72px] font-bold text-center">POKE MEMORIES</h1>
    <p class="text-center text-[32px] !mt-0">Select mode to start game</p>
    <div class="flex justify-center items-center gap-10 mt-8">
      <div
        class="border border-[#f3f3f3] rounded-2xl cursor-pointer w-[150px] h-[150px] flex flex-col justify-center items-center hover:bg-[#f3f3f3] hover:text-[#212121] transition-all duration-500"
        @click="onStart(16)"
      >
        <p class="text-[32px]">4x4</p>
        <p class="text-[20px]">Easy</p>
      </div>
      <div
        class="border border-[#f3f3f3] rounded-2xl cursor-pointer w-[150px] h-[150px] flex flex-col justify-center items-center hover:bg-[#f3f3f3] hover:text-[#212121] transition-all duration-500"
        @click="onStart(36)"
      >
        <p class="text-[32px]">6x6</p>
        <p class="text-[20px]">Easy</p>
      </div>
      <div
        class="border border-[#f3f3f3] rounded-2xl cursor-pointer w-[150px] h-[150px] flex flex-col justify-center items-center hover:bg-[#f3f3f3] hover:text-[#212121] transition-all duration-500"
        @click="onStart(64)"
      >
        <p class="text-[32px]">8x8</p>
        <p class="text-[20px]">Easy</p>
      </div>
      <div
        class="border border-[#f3f3f3] rounded-2xl cursor-pointer w-[150px] h-[150px] flex flex-col justify-center items-center hover:bg-[#f3f3f3] hover:text-[#212121] transition-all duration-500"
        @click="onStart(100)"
      >
        <p class="text-[32px]">10x10</p>
        <p class="text-[20px]">Easy</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onStart(numBlock) {
      this.$emit("onStart", { numBlock });
    },
  },
};
</script>
<style></style>
