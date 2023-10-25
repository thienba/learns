<template>
  <h1>This is a title...</h1>
  <base-nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    BaseNav: Nav,
  },
};
</script>

<style></style>
