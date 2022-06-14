<template>
  <div id="footer">
    <a href="https://beian.miit.gov.cn/" class="font-2 color-info">闽ICP备2021003109号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    limyel's blog by <a href="https://github.com/limyel" class="color-info">limyel</a> <i class="fa fa-copyright"></i> {{getYear()}}
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: 2022
    }
  },
  methods: {
    getYear() {
      let date = new Date();
      return date.getFullYear();
    }
  }
}
</script>

<style scoped>
#footer {
  text-align: center;
  border-top: 2px solid #eaeaea;
  padding: 20px 0;
  color: #6c757d;
  margin-top: 30px;
}

a {
  color: #0d6efd;
}
</style>