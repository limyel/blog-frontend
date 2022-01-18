<template>
  <div id="theme" class="container minh-100vh">
    <Header></Header>

    <div class="container flex-grow-1 mt-5">
      <router-view class="flex-grow-1 main"></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Theme",
  components: {Footer, Header}
}
</script>

<style lang="stylus">
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
@font-face {
  font-family: 'oppos-sons';
  src: url('../assets/font/OPPOSans-R.ttf')
}

@media screen and (min-width: 1500px)
  .main
    width 66%
    margin-left 17%

@media screen and (max-width 1500px)
  .main
    width 80%
    margin-left 10%

body
  *
    font-family 'oppos-sons'
</style>