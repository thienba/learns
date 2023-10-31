<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="flex items-center justify-center flex-wrap bg-teal-500 p-2">
      <div class="text-lg flex items-center gap-10">
        <nuxt-link to="/" class="text-gray-100 hover:text-gray-300 transition-all">
          Home
        </nuxt-link>
        <nuxt-link to="/about" class="text-gray-100 hover:text-gray-300 transition-all">
          About
        </nuxt-link>
        <nuxt-link to="/blogs" class="text-gray-100 hover:text-gray-300 transition-all">
          Blogs
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>

<style>
a.nuxt-link-exact-active {
  color: #45474B;
}
</style>
