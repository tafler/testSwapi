<template>
  <div class="footer">
    <p>
      mady by <a href="https://github.com/tafler" target="blank" class="footer__author">
        Artem Tafintsev
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  background: #373b40;
  font-size: 14px;
  color: #dddddd;
  opacity: 0.5;
}
.footer__author {
  position: relative;
  font-size: 16px;
  color: #eeeeee;
  opacity: 0.7;
  text-decoration: none;
}
.footer__author::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  height: 2px;
  width: 0px;
  background: #fff;
  transition: all 0.4s;
}
.footer__author:hover {
  color: #ffffff;
  opacity: 1;
}
.footer__author:hover::after {
  width: 100%;
}
</style>
