import mutations from './mutations'
import getters from './getters'

const namespaced = true
const state = () => ({
  currentPilot: ''
})

export default {
  namespaced,
  state,
  mutations,
  getters
}
