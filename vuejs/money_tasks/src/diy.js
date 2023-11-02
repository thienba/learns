import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
});

const setCount = () => {
  console.log("setCount");
  state.count = 10;
};

export default { state: readonly(state), setCount };
