<template>
  <div class="pilot-preview">
    <div class="pilot-preview__header">
      <h1 class="pilot-preview__name">
        {{ getCurrentPilot.name }}
      </h1>
      <button class="pilot-preview__close-btn" aria-label="clear personage" @click="clearPilot">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 48 48" 
          version="1.1"
          width="30px"
          height="30px"
        >
          <g id="surface1">
            <path style=" fill:#ffe300;" d="M 36.019531 8.445313 L 39.558594 11.980469 L 11.980469 39.554688 L 8.445313 36.019531 Z " />
            <path style=" fill:#ffe300;" d="M 39.554688 36.023438 L 36.019531 39.558594 L 8.445313 11.976563 L 11.980469 8.441406 Z " />
          </g>
        </svg>
      </button>
    </div>
    <div class="pilot-preview__wrapper">
      <PilotIcon
        :gen="getCurrentPilot.gender"
        :hair-color="pilotColors.hair"
        :eye-color="pilotColors.eye"
        :skin-color="pilotColors.skin"
      />
      <ul class="pilot-preview__list">
        <li v-for="(el, index) in pilotInfo" :key="index" class="pilot-preview__parameter">
          <span>{{ index }}:</span> <span>{{ el }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import PilotIcon from './PilotIcon'
import colors from './colors.js'

export default {
  name: 'Pilot',
  components: { PilotIcon },
  computed: {
    ...mapGetters('pilot', ['getCurrentPilot']),
    pilotInfo() {
      return {
        Height: this.getCurrentPilot.height,
        Weight: this.getCurrentPilot.mass,
        'Year of birth': this.getCurrentPilot['birth_year'],
        Gender: this.getCurrentPilot.gender
      }
    },
    pilotColors() {
      return {
        eye: colors[this.getCurrentPilot['eye_color']],
        hair: colors[this.getCurrentPilot['hair_color']],
        skin: colors[this.getCurrentPilot['skin_color']]
      }
    }
  },
  methods: {
    ...mapMutations('pilot', ['TAKE_THIS_PILOT']),
    clearPilot() {
      this.TAKE_THIS_PILOT('')
    }
  }
}
</script>

<style scoped>
.pilot-preview__wrapper {
  display: flex;
}

.pilot-preview__header {
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
}

.pilot-preview__name {
  text-transform: lowercase;
}

.pilot-preview__list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 40px;
  padding-left: 20px;
  box-shadow: inset 15px 0 10px -15px rgba(200, 200, 200, 0.8);
}

.pilot-preview__close-btn {
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
}

.pilot-preview__close-btn:hover {
  opacity: 1;
}

@media (max-width: 900px) {
  .pilot-preview__wrapper {
    flex-direction: column;
  }
}
</style>
