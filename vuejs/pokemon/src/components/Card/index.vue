<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flip-card"
    :class="{ '!cursor-default': isDisabled }"
    @click="onToggleFlipCard"
    :style="{
      height: `${(920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16}px`,
      width: `${(((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4}px`,
      perspective: `${
        ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4) * 2
      }px`,
    }"
  >
    <div class="flip-card-inner" :class="{ 'is-flipped': isFlipped }">
      <div class="flip-card-front">
        <img
          :style="{
            width: `${
              (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 / 3
            }px`,
          }"
          src="../../assets/images/icon_back.png"
          alt="icon-back"
        />
      </div>
      <div class="flip-card-back">
        <img
          :style="{
            width: `${
              ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 / 3) * 2
            }px`,
          }"
          :src="require(`../../assets/images/${card.value}.png`)"
          alt="icon-back"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
    card: {
      type: [Number, String, Object, Array],
      required: true,
    },
    rules: {
      type: Array,
    },
  },
  methods: {
    onToggleFlipCard() {
      if (this.rules.length === 2) return;
      if (this.isDisabled) return;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) this.$emit("onFlip", this.card);
    },

    onFlipBackCard() {
      this.isFlipped = false;
    },

    onDisable() {
      this.isDisabled = true;
    },
  },
};
</script>

<style lang="css" scoped>
.flip-card {
  background-color: transparent;
  height: 150px;
  width: 120px;
  perspective: 1000px;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  border-radius: 16px;
  background: #212121;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
  border-radius: 16px;
  background: white;
}
</style>
>
