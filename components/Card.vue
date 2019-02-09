<template>
  <button class="card" :class="{'card--ship-landed': shipLanded, 'card--ship-starts': shipStarts}" aria-label="card">
    <h3>{{ item.name }}</h3>
    <img :src="item.img" :alt="item.name">
  </button>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    shipLanded: {
      type: Boolean,
      default: false
    },
    shipStarts: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@keyframes fly-in {
  0% {
    transform: translateY(100px) scale(1.5) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0px) scale(0.5) rotate(200deg);
    opacity: 0;
  }
}
@keyframes fly-out {
  0% {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(200px) scale(0.9);
    opacity: 0.5;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  min-height: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 3px;
  background: #aaa;
  overflow: hidden;
  user-select: none;
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.25),
    inset 0 3px 0 rgba(255, 255, 255, 0.5), 0 3px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 22px rgba(0, 0, 0, 0.1);
}
.card:hover {
  box-shadow: inset 0 0 22px rgba(0, 0, 0, 0.2),
    0 3px 0 rgba(255, 255, 255, 0.4), inset 0 3px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 22px rgba(0, 0, 0, 0.1);
}
.card--ship-landed {
  position: relative;
}
.card--ship-landed::after {
  position: absolute;
  top: 40%;
  left: 50%;
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  background: url('../static/img/starship.png');
  background-position: center;
  background-size: cover;
  animation: fly-in 2s ease-in;
  opacity: 0;
}
.card--ship-starts img {
  animation: fly-out 2s ease-out;
  opacity: 0;
}
</style>
