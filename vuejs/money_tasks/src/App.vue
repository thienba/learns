<template>
  <app-nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    AppNav: Nav,
  },
};
</script>

<style></style>
