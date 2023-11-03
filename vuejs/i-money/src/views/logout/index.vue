<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const { logout, error } = useLogout();
    (async () => {
      await logout();
      if (!error.value) router.push({ name: "login-route" });
    })();

    return {
      error,
    };
  },
};
</script>
