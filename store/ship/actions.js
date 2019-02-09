export default {
  async TAKE_THIS_SHIP_ID({ commit }, payload) {
    try {
      const res = await this.$axios.$get(`/api/starship/${payload}`)
      commit('TAKE_THIS_SHIP', res)
    } catch (e) {
      throw e
    }
  }
}
