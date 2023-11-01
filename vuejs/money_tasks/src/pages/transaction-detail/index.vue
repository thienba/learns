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
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["transaction"]),
  },
  methods: {
    ...mapActions(["fetchTs"]),
  },
  mounted() {
    this.fetchTs({ id: this.$route.params.id });
  },
};
</script>
