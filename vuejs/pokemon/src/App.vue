<template>
  <div class="flex flex-col justify-center items-center w-full min-h-screen bg-[#212121]">
    <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen
      v-if="statusMatch === 'match'"
      :cardsContext="settings.cardsContext"
      :totalOfBlocks="settings.totalOfBlocks"
      @onFinish="onChangeStatusFinished"
    />
    <result-screen
      v-if="statusMatch === 'finished'"
      @onRestartGame="onStartAgain"
      :timer="timer"
    />
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen";
import InteractScreen from "./components/InteractScreen";
import ResultScreen from "./components/ResultScreen";
import { shuffle } from "./utils/array";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: "default",
      timer: null,
    };
  },
  methods: {
    onHandleBeforeStart(event) {
      this.settings.totalOfBlocks = event.numBlock;

      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      this.settings.cardsContext = shuffle(shuffle(shuffle(shuffle(shuffle(cards)))));
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
    onChangeStatusFinished() {
      this.statusMatch = "finished";
      this.timer = Math.round((new Date().getTime() - this.settings.startedAt) / 1000);
    },
    onStartAgain() {
      this.statusMatch = "default";
    },
  },
};
</script>
