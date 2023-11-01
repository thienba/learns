<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Transactions page is here...</h1>
    <div v-if="tsList.length">
      <div v-for="ts in tsList" :key="ts.id">
        <router-link :to="{ name: 'transaction-detail-route', params: { id: ts.id } }">
          {{ ts.title }}
        </router-link>
        <p>{{ ts.price }}</p>
      </div>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>Loading...</div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTs");
    return {
      tsList: computed(() => store.state.tsList),
      error: computed(() => store.state.error),
    };
  },
};
</script>
