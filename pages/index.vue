<template>
  <div class="starships">
    <div class="container">
      <h1>Choice any ship in list</h1>
      <StarshipList :list="starhips" />
    </div>
  </div>
</template>

<script>
import StarshipList from '@/components/StarshipList'
export default {
  name: 'StarshipsPage',
  components: {
    StarshipList
  },
  async asyncData({ $axios }) {
    try {
      const data = await $axios.$get('/api/starships')
      return { starhips: data }
    } catch (e) {
      throw e
    }
  }
}
</script>
