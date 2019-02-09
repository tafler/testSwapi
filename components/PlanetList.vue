<template>
  <div class="planet-list">
    <Card
      v-for="el in list"
      :key="el.name"
      :item="el"
      :ship-landed="getCurrentShip.id && currentPlanet === el.id"
      @click.native="pickThat(el)"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PlanetList',
  components: { Card },
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      currentPlanet: null
    }
  },
  computed: {
    ...mapGetters('ship', ['getCurrentShip'])
  },
  methods: {
    ...mapActions('planet', ['TAKE_THIS_PLANET_ID']),
    pickThat(planet) {
      this.TAKE_THIS_PLANET_ID(planet.id)
      this.currentPlanet = planet.id
      const timer = this.getCurrentShip.id ? 1000 : 0 // задержка для анимации если выбран корабль
      setTimeout(() => {
        if (this.getCurrentShip) {
          // если корабль выбран, переходим на страницу пилотов
          this.$router.push({
            name: 'pilot',
            query: { ship: this.getCurrentShip.id, planet: this.currentPlanet }
          })
        } else {
          // иначе на выбор кораблей
          this.$router.push({ name: 'index' })
        }
      }, timer)
    }
  }
}
</script>

<style scoped>
.planet-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  margin: 40px auto;
  box-shadow: 0 0 1px 1px rgba(200, 200, 200, 0.1);
  user-select: none;
  background: #1c1e22;
}
</style>
