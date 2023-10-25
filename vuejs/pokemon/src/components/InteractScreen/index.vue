<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="container flex items-center flex-wrap gap-2 justify-center w-[600px] my-10"
    :style="{
      width: `${
        ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 + 16) *
        Math.sqrt(cardsContext.length)
      }px`,
    }"
  >
    <card-flip
      v-for="(card, index) in cardsContext"
      :ref="`card-${index}`"
      :card="{ index, value: card }"
      :cardsContext="cardsContext"
      :key="index"
      :rules="rules"
      @onFlip="checkRule($event)"
    />
  </div>
</template>
<script>
import CardFlip from "../Card";
export default {
  components: {
    CardFlip,
  },
  props: {
    cardsContext: {
      type: Array,
      default() {
        return [];
      },
    },
    totalOfBlocks: {
      type: Number,
    },
  },
  data() {
    return {
      rules: [],
      correctCount: 0,
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return;
      this.rules.push(card);

      if (this.rules.length === 2 && this.rules[0].value === this.rules[1].value) {
        this.$refs[`card-${this.rules[0].index}`][0].onDisable();
        this.$refs[`card-${this.rules[1].index}`][0].onDisable();

        this.correctCount += 1;
        if (this.correctCount === this.totalOfBlocks / 2) {
          setTimeout(() => this.$emit("onFinish"), 1000);
        }

        this.rules = [];
      } else if (this.rules.length === 2 && this.rules[0].value !== this.rules[1].value) {
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();

          this.rules = [];
        }, 800);
      } else return;
    },
  },
};
</script>
<style></style>
