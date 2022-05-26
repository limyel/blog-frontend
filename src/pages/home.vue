<template>
  <div id="home">
    <div class="home-content">

    </div>

    <SideBar/>
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
</script>

<style scoped>
#home {
  display: flex;
}

.home-content {
  flex-grow: 1;
}

</style>