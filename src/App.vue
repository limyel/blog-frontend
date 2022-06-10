<template>
  <div id="app">
    <Header/>
    <router-view class="main"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/css/reset.css";

@font-face {
  font-family: "oppos-sons";
  src: url('./assets/font/OPPOSans-M.ttf');
  font-weight: normal;
  font-style: normal;
}

#app {
  display: flex;
  flex-direction: column;
  width: 44%;
  margin-left: 28%;
  min-height: 100vh;
}

body * {
  font-family: "oppos-sons", monospace;
}

.main {
  flex-grow: 1;
}

/* markdown 样式 */
.github-markdown-body {
  padding: 0 !important;
}
</style>
