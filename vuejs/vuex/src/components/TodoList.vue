<template>
  <div class="flex items-center justify-center w-screen h-screen font-medium">
    <div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
      <div class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
        <div class="flex items-center mb-6">
          <svg
            class="h-8 w-8 text-indigo-500 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h4 class="font-semibold ml-3 text-lg">Sam's Jobs</h4>
        </div>
        <todo-item
          v-for="(task, index) in tasks"
          :key="index"
          :index="index"
          :task="task"
        />
        <add-task />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodiItem.vue";
import AddTask from "./AddTask.vue";
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    AddTask,
  },
  computed: {
    ...mapGetters(["tasks"]), // $store.state.name => this.name
  },
};
</script>

<style>
input[type="checkbox"]:checked + label span:first-of-type {
  background-color: #10b981;
  border-color: #10b981;
  color: #fff;
}

input[type="checkbox"]:checked + label span:nth-of-type(2) {
  text-decoration: line-through;
  color: #9ca3af;
}
</style>
