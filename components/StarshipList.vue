<template>
  <div class="starship-list">
    <Card
      v-for="el in list"
      :key="el.name"
      :item="el"
      :ship-starts="currentShip === el.id"
      @click.native="pickThat(el)"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'StarshipList',
  components: { Card },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentShip: null
    }
  },
  computed: {
    ...mapGetters('planet', ['getCurrentPlanet'])
  },
  methods: {
    ...mapMutations('ship', ['TAKE_THIS_SHIP']),
    pickThat(ship) {
      this.currentShip = ship.id
      this.TAKE_THIS_SHIP(ship)
      setTimeout(() => {
        if (this.getCurrentPlanet) {
          this.$router.push({
            name: 'pilot',
            query: { ship: ship.id, planet: this.getCurrentPlanet.id }
          })
        } else {
          this.$router.push({ name: 'planet' })
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.starship-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  margin: 40px auto;
  box-shadow: 0 0 1px 1px rgba(200, 200, 200, 0.1);
  user-select: none;
  background: #1c1e22;
}
</style>
