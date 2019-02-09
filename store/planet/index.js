import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const namespaced = true
const state = () => ({
  currentPlanet: ''
})

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
