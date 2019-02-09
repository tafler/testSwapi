<template>
  <div class="pilot-wrapper">
    <div class="left-side">
      <PlanetBlock v-if="!getCurrentPilot" />
      <PilotBlock v-if="getCurrentPilot" />
    </div>
    <div class="right-side">
      <Aside />
    </div>
  </div>
</template>

<script>
import PlanetBlock from '@/components/PlanetBlock'
import PilotBlock from '@/components/PilotBlock'
import Aside from '@/components/Aside'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PilotPage',
  components: { Aside, PlanetBlock, PilotBlock },
  computed: {
    ...mapGetters('pilot', ['getCurrentPilot']),
    ...mapGetters('planet', ['getCurrentPlanet'])
  },
  mounted() {
    this.TAKE_THIS_PLANET_ID(+this.$route.query.planet)
    this.TAKE_THIS_SHIP_ID(+this.$route.query.ship)
  },
  methods: {
    ...mapActions('planet', ['TAKE_THIS_PLANET_ID']),
    ...mapActions('ship', ['TAKE_THIS_SHIP_ID'])
  }
}
</script>

<style scoped>
.pilot-wrapper {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}
.left-side {
  flex: 1 1 70%;
  align-self: center;
  max-width: 700px;
  min-height: 500px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 3px;
  background: #333;
}

@media (max-width: 900px) {
  .pilot-wrapper {
    flex-direction: column;
    margin-top: 140px;
  }
}
</style>
