<template>
  <div class="flex items-center">
    <button @click="onAddTask(title)" class="w-full px-2 text-sm font-medium rounded">
      <svg
        class="w-5 h-5 text-gray-400 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0
  0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <input
      class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
      type="text"
      placeholder="add a new task"
      v-model="title"
    />
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    ...mapActions(["addTaskAction"]),
    onAddTask(title) {
      this.addTaskAction(title);
      this.title = "";
    },
  },
};
</script>
