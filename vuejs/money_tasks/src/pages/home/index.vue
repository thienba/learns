<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Home page is here...</h1>
  <button @click="diy.setCount">Click me!</button>
  {{ count }}
</template>
<script>
export default {
  inject: ['diy'],
  computed: {
    count () {
      return this.diy.state.count
    }
  }
};
</script>
