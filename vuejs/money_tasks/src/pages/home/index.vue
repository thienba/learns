<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Home page is here...</h1>
  {{ count }}
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
};
</script>
