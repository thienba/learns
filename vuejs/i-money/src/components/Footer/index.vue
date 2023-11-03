<template>
  <footer
    class="fixed bottom-0 left-0 right-0 px-4 pt-4 pb-safe-4 shadow-2xl shadow-white rounded-t-lg"
  >
    Footer
  </footer>
</template>
<script>
import { FOOTER_OPTIONS } from "@/constant";
import { reactive } from "vue";
export default {
  setup() {
    const profileOpts = reactive(FOOTER_OPTIONS);

    return {
      profileOpts,
    };
  },
};
</script>
