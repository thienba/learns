<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Transactions page is here...</h1>
    <div v-for="tx in txList" :key="tx.id">
      <router-link :to="{ name: 'transaction-detail-route', params: { id: tx.id } }">
        {{ tx.title }}
      </router-link>
      <p>{{ tx.price }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txList: [
        {
          id: 1,
          title: "Transaction 1",
          price: 1242311,
        },
        {
          id: 2,
          title: "Transaction 2",
          price: 645433,
        },
        {
          id: 3,
          title: "Transaction 3",
          price: 2422311,
        },
      ],
    };
  },
};
</script>
