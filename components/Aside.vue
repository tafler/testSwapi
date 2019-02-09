<template>
  <div class="aside">
    <div class="ship-info">
      <ul>
        <h2>You Ship Parameters</h2>
        <li v-for="(one, index) in starshipList" :key="index" class="aside-parameters">
          <span class="icon-font-jedi">
            ^
          </span>
          <span class="aside__info-key">
            {{ index }}
          </span>
          <span class="aside__info-value">
            {{ one }}
            <span v-if="index === 'Price: '" class="icon-font-jedi">
              $
            </span>
          </span>
        </li>
      </ul>
    </div>
    <div class="planet-info">
      <ul>
        <h2>Planet Parameters</h2>
        <li v-for="(one, index) in planetList" :key="index" class="aside-parameters">
          <span class="icon-font-jedi">
            ^
          </span>
          <span class="aside__info-key">
            {{ index }}
          </span>
          <span class="aside__info-value">
            {{ one }}
          </span>
        </li>
        <li
          v-if="getCurrentPlanet.people && getCurrentPlanet.people.length > 0"
          class="planet-info__people"
        >
          <button class="planet-info__people-btn" aria-label="personages dropdown" @click="showPeoples = !showPeoples">            
            Personages from this planet
            <span :class="{'people-btn__arrow--up': showPeoples, 'people-btn__arrow': true}">     
              <svg
                id="Capa_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                version="1.1" 
                x="0px" 
                y="0px" 
                viewBox="0 0 22.062 22.062" 
                style="enable-background:new 0 0 22.062 22.062;" 
                xml:space="preserve" 
                width="26" 
                height="26"
              >
                <g>
                  <path style="fill:currentColor;" d="M10.544,11.031l6.742-6.742c0.81-0.809,0.81-2.135,0-2.944l-0.737-0.737 c-0.81-0.811-2.135-0.811-2.945,0L4.769,9.443c-0.435,0.434-0.628,1.017-0.597,1.589c-0.031,0.571,0.162,1.154,0.597,1.588   l8.835,8.834c0.81,0.811,2.135,0.811,2.945,0l0.737-0.737c0.81-0.808,0.81-2.134,0-2.943L10.544,11.031z" />
                </g>
              </svg>
            </span>
          </button>
          <ul v-if="showPeoples" :class="{'planet-info__people-list--active': showPeoples, 'planet-info__people-list': true}">
            <li
              v-for="(man) in getCurrentPlanet.people"
              :key="man.id"
            >
              <button :class="{'people-list__btn--active': man.id === getCurrentPilot.id, 'people-list__btn': true}" aria-label="personage" @click="takeMan(man)"> 
                <span class="icon-font-jedi">
                  #
                </span>
                <span class="people-list__name">
                  {{ man.name }}
                </span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Aside',
  data() {
    return {
      showPeoples: false
    }
  },
  computed: {
    ...mapGetters('ship', ['getCurrentShip']),
    ...mapGetters('planet', ['getCurrentPlanet']),
    ...mapGetters('pilot', ['getCurrentPilot']),
    starshipList() {
      return {
        'Name: ': this.getCurrentShip.name,
        'Price: ': this.getCurrentShip.cost_in_credits,
        'Length: ': this.getCurrentShip.length,
        'Crew: ': this.getCurrentShip.crew,
        'Passengers: ': this.getCurrentShip.passengers
      }
    },
    planetList() {
      return {
        'Name: ': this.getCurrentPlanet.name,
        'Diameter: ': this.getCurrentPlanet.diameter,
        'Gravity: ': this.getCurrentPlanet.gravity,
        'Population: ': this.getCurrentPlanet.population
      }
    }
  },
  methods: {
    ...mapMutations('pilot', ['TAKE_THIS_PILOT']),
    takeMan(id) {
      this.TAKE_THIS_PILOT(id)
    }
  }
}
</script>

<style scoped>
.aside {
  height: 100%;
  padding: 40px 20px;
  background: #1c1e22;
}

.aside-parameters {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
}
.aside-parameters span:not(:last-child) {
  margin-right: 10px;
}

.planet-info__people-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 3px 10px;
  font-size: 18px;
  background: #33373f;
}

.planet-info__people-btn:hover {
  box-shadow: inset 0 0 22px rgba(0, 0, 0, 0.2),
    inset 0 3px 0 rgba(0, 0, 0, 0.1), inset 0 0 22px rgba(0, 0, 0, 0.1);
}

.people-btn__arrow {
  display: flex;
  margin-left: 20px;
  transform: rotate(90deg);
  transition: transform 0.2s ease-in-out;
}

.people-btn__arrow--up {
  transform: rotate(-90deg);
}

.planet-info__people-list {
  padding: 20px 10px;
}

.people-list__btn {
  display: block;
  padding: 0 20px;
  line-height: 40px;
}
.people-list__btn:hover {
  background: rgba(0, 0, 0, 0.2);
}

.people-list__name {
  position: relative;
  margin-left: 10px;
  padding-bottom: 5px;
}

.people-list__name::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  display: block;
  width: 0;
  height: 3px;
  background: #c8c8c8;
  transition: width 0.4s ease-in-out;
}

.people-list__btn--active .people-list__name::after {
  width: 100%;
}
</style>
