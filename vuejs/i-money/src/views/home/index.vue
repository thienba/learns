<template lang="">
  <h1>This is home page...</h1> <p v-if="user">{{ user.displayName }}</p>
</template>

<script>
import { useProfile } from "@/composables/useProfile";
export default {
  setup() {
    const { getProfile } = useProfile();
    const { user } = getProfile();
    return {
      user,
    };
  },
};
</script>
