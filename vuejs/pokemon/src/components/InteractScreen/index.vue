<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container flex items-center flex-wrap gap-2 justify-center w-[900px]">
    <card-flip v-for="(context, i) in cardsContext" :context="context" :key="i" />
  </div>
</template>
<script>
import CardFlip from "../Card";
export default {
  components: {
    CardFlip,
  },
  props: {
    cardsContext: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      rules: [],
    };
  },
};
</script>
<style></style>
