<template>
  <div id="app">
    <Header/>
    <router-view class="main"></router-view>
    <Footer/>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import "./assets/css/reset.css";

@font-face {
  font-family: "oppos-sons";
  src: url('./assets/font/OPPOSans-M.ttf')
}

#app {
  display: flex;
  flex-direction: column;
  width: 66%;
  margin-left: 17%;
  min-height: 100vh;
}

body * {
  font-family: "oppos-sons";
}

.main {
  flex-grow: 1;
}

<!-- markdown 样式 -->
.github-markdown-body {
  padding: 0 !important;
}
</style>