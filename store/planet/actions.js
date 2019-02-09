export default {
  async TAKE_THIS_PLANET_ID({ commit }, payload) {
    const planet = this.$axios.$get(`/api/planet/${payload}`)
    const pilots = this.$axios.$get(`/api/pilotfromplanet/${payload}`)
    try {
      const result = await Promise.all([pilots, planet])
      if (result[1]) {
        commit('TAKE_THIS_PLANET', { planet: result[1], pilots: result[0] })
      }
    } catch (e) {
      throw e
    }
  }
}
