<template>
  <div class="page">
    <button class="pre-page">上一页</button>
    <button class="next-page">下一页</button>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    pageInfo: Object
  }
}
</script>

<style scoped>
.page {
  margin-top: 35px;
}
.next-page, .pre-page {
  background-color: #ffffff;
}
.next-page {
  margin-left: 10px;
}
.pre-page {
  margin-right: 10px;
}
</style>