<template>
  <div class="flex flex-col items-center gap-2" v-if="user">
    <div class="rounded-full overflow-hidden w-24 h-24">
      <img
        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile image"
        class="w-full h-full"
      />
    </div>
    <p class="text-xl font-medium text-blue-500">{{ user.displayName }}</p>
    <p class="text-gray-200">{{ user.email }}</p>
  </div>

  <div class="mt-14 flex flex-col gap-3">
    <h3 class="text-xl font-medium text-blue-500">General</h3>
    <ul class="flex flex-col gap-2">
      <li v-for="(opt, index) of profileOpts" :key="index">
        <router-link :to="opt.route" class="flex justify-between items-center">
          <div class="flex items-center gap-4" :class="opt.color && opt.color">
            <p class="flex items-center">
              <i class="t2ico text-2xl" :class="opt.icon"></i>
            </p>
            <p class="flex items-center">{{ opt.name }}</p>
          </div>
          <p class="flex items-center">
            <i class="t2ico t2ico-arrow-right"></i>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constant";
import { useProfile } from "@/composables/useProfile";

export default {
  setup() {
    const profileOpts = reactive(PROFILE_OPTIONS);
    const { getProfile } = useProfile();
    const { user } = getProfile();

    return {
      profileOpts,
      user,
    };
  },
};
</script>
