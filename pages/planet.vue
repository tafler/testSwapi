<template>
  <div class="planets">
    <div class="container">
      <h1>Choise Planet</h1>
      <PlanetList :list="planets" />
    </div>
  </div>
</template>

<script>
import PlanetList from '@/components/PlanetList'
export default {
  name: 'PlanetsPage',
  components: { PlanetList },
  async asyncData({ $axios }) {
    try {
      const data = await $axios.$get('/api/planets')
      return { planets: data }
    } catch (e) {
      throw e
    }
  }
}
</script>
