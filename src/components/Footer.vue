<template>
  <div id="footer">
    <a href="https://beian.miit.gov.cn/" class="font-2 color-info">闽ICP备2021003109号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    limyel's blog by <a href="https://github.com/limyel" class="color-info">limyel</a> <i class="fa fa-copyright"></i> {{year}}
  </div>
</template>

<script setup>
import {ref} from "vue";

let date = new Date()
let year = ref(date.getFullYear())
</script>

<style scoped>
#footer {
  text-align: center;
  border-top: 1px solid #E1E1E1;
  padding: 20px 0;
}

a {
  color: #0d6efd;
}
</style>