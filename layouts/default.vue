<template>
  <div class="layout--main">
    <Header />
    
    <transition name="fade">
      <nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Layout',
  components: { Footer, Header }
}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@font-face {
  font-family: 'Star Jedi';
  src: url('../static/fonts/StarJedi.woff2') format('woff2'),
    url('../static/fonts/StarJedi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'D-DIN';
  src: url('../static/fonts/D-DIN.woff2') format('woff2'),
    url('../static/fonts/D-DIN.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: 'D-DIN', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  line-height: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  color: #c8c8c8;
}
.container {
  max-width: 1920px;
  margin: 40px auto;
  padding: 40px;
}

.layout--main {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('/img/bg.jpg') #272b30;
}
button {
  display: flex;
  align-items: center;
  background: unset;
  border: none;
  border-color: transparent;
  line-height: 30px;
  outline: none;
  cursor: pointer;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3 {
  padding: 7px 2px;
  font-family: 'Star Jedi', Roboto, 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 2px;
  text-transform: lowercase;
}
h1 {
  padding: 5px 2px;
  color: #c0c0c0;
  font-size: 26px;
  letter-spacing: 3px;
  line-height: 40px;
}
h2 {
  color: #d8b731;
  font-size: 22px;
  line-height: 30px;
}
h3 {
  color: #383838;
  font-size: 20px;
  line-height: 27px;
}
.icon-font-jedi {
  font-family: 'Star Jedi';
}

@media (max-width: 900px) {
  .container {
    margin-top: 80px;
  }
  h1,
  h2,
  h3 {
    text-align: center;
  }
}
</style>
