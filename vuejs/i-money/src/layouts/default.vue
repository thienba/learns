<template>
  <slot />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>
