<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Transaction detail page is here...</h1>
    <div v-if="transaction">
      <h3>Price: {{ transaction.title }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    console.log(route.params.id);
    store.dispatch("fetchTs", { id: route.params.id });

    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
