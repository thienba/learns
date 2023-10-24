<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flip-card" @click="onChoseCard">
    <div class="flip-card-inner" :class="{ 'is-flipped': active }">
      <div class="flip-card-front">
        <img
          class="w-[30px]"
          src="../../assets/images/icon_back.png"
          alt="icon-back"
        />
      </div>
      <div class="flip-card-back">
        <img
          class="w-[30px]"
          src="../../assets/images/1.png"
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
      active: false,
    };
  },
  props: {
    context: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onChoseCard() {
      this.active = !this.active;
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
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
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
  background:#212121;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
  border-radius: 16px;
  background:white;
}
</style>
>
