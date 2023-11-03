<template>
  <header-auth />
  <slot />
</template>

<script>
import HeaderAuth from "@/components/HeaderAuth";
export default {
  components: {
    HeaderAuth,
  },
};
</script>
