<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Transactions page is here...</h1>
    <div v-if="txList.length">
      <div v-for="tx in txList" :key="tx.id">
        <router-link :to="{ name: 'transaction-detail-route', params: { id: tx.id } }">
          {{ tx.title }}
        </router-link>
        <p>{{ tx.price }}</p>
      </div>
    </div>

    <div v-else>Loading...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txList: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => (this.txList = data));
  },
};
</script>
