<template>
  <div class="flex flex-col justify-center items-center w-full h-screen bg-[#212121]">
    <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen v-if="statusMatch === 'match'"  :cardsContext="settings.cardsContext" />
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen";
import InteractScreen from "./components/InteractScreen";
import { shuffle } from "./utils/array";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: "default",
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
  },
};
</script>
