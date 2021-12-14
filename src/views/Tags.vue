<template>
  <div id="tags">
    <span class="tag pt-2 pb-2 pl-5 pr-5" style="display: inline-block">
      <a class="font-2" href="#">Java<sup class="font-1 color-danger">10</sup></a>
    </span>

    <span class="tag p-2" style="display: inline-block">
      <a class="font-2" href="#">Java<sup class="font-1 color-danger">10</sup></a>
    </span>

    <span class="tag p-2" style="display: inline-block">
      <a class="font-2" href="#">Java<sup class="font-1 color-danger">10</sup></a>
    </span>

    <span class="tag p-2" style="display: inline-block">
      <a class="font-2" href="#">计算机科学与技术<sup class="font-1 color-danger">10</sup></a>
    </span>

    <span class="tag p-2" style="display: inline-block">
      <a class="font-2" href="#">Java<sup class="font-1 color-danger">10</sup></a>
    </span>
  </div>
</template>

<script>
export default {
  name: "Tags"
}
</script>

<style lang="stylus">
@media screen and (min-width: 1500px)
  #tags
    width 50%
    margin-left 25%

@media screen and (max-width 1500px)
  #tags
    width 60%
    margin-left 20%


.tag:hover
  transform scale(1.3)
  a
    color #000000
</style>