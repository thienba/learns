<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Transaction detail page is here...</h1>
    <div v-if="transaction">
      <h3>Price: {{ transaction.title }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch(`http://localhost:3000/transactions/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => (this.transaction = data));
  },
};
</script>
