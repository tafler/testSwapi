import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const namespaced = true
const state = () => ({
  currentShip: ''
})

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
