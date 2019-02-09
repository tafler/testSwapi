<template>
  <div class="planet-block">
    <h2>your ship {{ getCurrentShip.name }} has landed on planet {{ getCurrentPlanet.name }}</h2>
    <div class="planet-block__wrapper">
      <div class="planet-block__image">
        <img :src="getCurrentPlanet.img" :alt="getCurrentPlanet.name">
      </div>
      <div>
        <nuxt-link :to="{name: 'index'}" tag="button" class="planet-block__btn" aria-label="to starships">
          change ship
        </nuxt-link>
        <nuxt-link :to="{name: 'planet'}" tag="button" class="planet-block__btn" aria-label="to planets">
          change planet
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Planet',
  computed: {
    ...mapGetters('planet', ['getCurrentPlanet']),
    ...mapGetters('ship', ['getCurrentShip'])
  }
}
</script>

<style scoped>
.planet-block__image {
  position: relative;
  display: block;
  width: 300px;
  height: 300px;
}
.planet-block__image img {
  width: 100%;
  height: 100%;
}
.planet-block__image::after {
  position: absolute;
  top: 100px;
  left: 100px;
  display: block;
  content: '';
  width: 40px;
  height: 40px;
  background: url('../static/img/starship.png');
  background-size: cover;
  background-position: center;
}
.planet-block__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.planet-block__btn {
  margin: 20px 0;
  padding: 10px;
  background: #5a606d;
  font-size: 18px;
  line-height: 30px;
}
.planet-block__btn:hover {
  box-shadow: inset 0 0 22px rgba(0, 0, 0, 0.2),
    inset 0 3px 0 rgba(0, 0, 0, 0.1), inset 0 0 22px rgba(0, 0, 0, 0.1);
}
@media (max-width: 900px) {
  .planet-block__image {
    width: 200px;
    height: 200px;
    margin-bottom: 40px;
  }
  .planet-block__wrapper {
    flex-direction: column;
  }
}
</style>
