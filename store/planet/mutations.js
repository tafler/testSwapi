const TAKE_THIS_PLANET = (state, payload) => {
  state.currentPlanet = payload.planet
  state.currentPlanet.people = payload.pilots
}

const CLEAR_PLANET = state => {
  state.currentPlanet = ''
}

export default {
  TAKE_THIS_PLANET,
  CLEAR_PLANET
}
