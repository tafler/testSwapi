<template>
  <div class="header" :class="{'header-logo--left': $route.name === 'pilot'}">
    <button class="header-logo icon-font-jedi" aria-label="home" @click="goHome">
      @
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapMutations('ship', ['TAKE_THIS_SHIP']),
    ...mapMutations('planet', ['CLEAR_PLANET']),
    goHome() {
      this.$router.push('/')
      this.CLEAR_PLANET()
      this.TAKE_THIS_SHIP('')
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.header-logo {
  margin: 10px;
  margin-left: auto;
  font-size: 50px;
  line-height: 70px;
  color: #d8b731;
}

.header-logo-left {
  width: 79%;
}
</style>
