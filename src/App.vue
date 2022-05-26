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
  src: url('./assets/font/OPPOSans-R.ttf')
}

#app {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  min-height: 100vh;
}

body * {
  font-family: "oppos-sons";
}

.main {
  flex-grow: 1;
}
</style>