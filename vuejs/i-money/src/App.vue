<template>
  <div class="h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
    <div class="w-[450px]">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { DEFAULT_LAYOUT } from "@/constant";
import { computed } from "vue";
export default {
  name: "App",
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout || DEFAULT_LAYOUT),
    };
  },
};
</script>
