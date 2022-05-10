<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Theme from './pages/Theme.vue'
</script>

<template>
  <Theme></Theme>
</template>

<style>
  @import "./assets/css/reset.css";
  @font-face {
    font-family: 'oppos-sons';
    src: url('./assets/font/OPPOSans-R.ttf')
  }

  body * {
    font-family: 'oppos-sons';
  }
</style>
