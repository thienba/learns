<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="nav">
    <router-link :to="{ name: 'overview-route' }">Overview</router-link>
    <router-link :to="{ name: 'transaction-route' }">Transactions</router-link>
    <router-link to="/">Budget</router-link>
    <router-link to="/">Report</router-link>
    <router-link to="/">Setting</router-link>
  </nav>
</template>
<script>
export default {};
</script>
<style></style>
