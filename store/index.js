import Vuex from 'vuex'
import Vue from 'vue'
import ship from './ship/index'
import pilot from './pilot/index'
import planet from './planet/index'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    ship,
    pilot,
    planet
  }
})
