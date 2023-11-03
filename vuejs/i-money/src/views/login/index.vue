<template>
  <div class="mt-8">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          class="block border border-grey-light focus:outline-none w-full p-3 rounded-lg text-black mb-4"
          name="email"
          placeholder="Email"
          v-model="data.email"
        />

        <input
          type="password"
          class="block border border-grey-light focus:outline-none w-full p-3 rounded-lg text-black mb-4"
          name="password"
          placeholder="Password"
          v-model="data.password"
        />

        <button
          type="submit"
          class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-400 transition-all my-1"
        >
          Sign Up
        </button>

        <p class="text-red-500 italic min-h-[30px]">{{ error }}</p>

        <div class="text-center">
          <p class="text-white">
            I'm a new user.
            <router-link
              class="text-blue-600 font-medium"
              :to="{ name: 'register-route' }"
            >
              Sign In
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signIn } = useSignIn();
    const data = reactive({
      email: "",
      password: "",
    });

    const onSubmit = async () => {
      await signIn(data.email, data.password);
      if (!error.value) router.push({ name: "profile-route" });
    };

    return {
      data,
      onSubmit,
      error,
      isPending,
    };
  },
};
</script>
<style lang=""></style>
