<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Overview page is here...</h1>
  <input type="text" placeholder="Search name..." v-model="searchTxt" />
  <ul>
    <li v-for="(customer, index) in customersFilter" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>
<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup({ theme }, { emit }) {
    console.log(theme);
    console.log(emit);

    const searchTxt = ref("");
    const customers = reactive(["Tom", "Bob", "Marry", "Doe", "John"]);

    const customersFilter = computed(() =>
      customers
        .map((customer) => customer.toLowerCase())
        .filter((customer) => customer.includes(searchTxt.value.toLowerCase()))
    );

    watch(searchTxt, (newVal, oldVal) => console.log(newVal, oldVal));

    watchEffect(() => {
      if (searchTxt.value) {
        console.log(searchTxt.value);
      }
    });

    return {
      searchTxt,
      customersFilter,
    };
  },
};
</script>
