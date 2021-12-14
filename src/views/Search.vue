<template>
  <div id="search">
    <div>
      <input class="form-input">
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style lang="stylus">
@media screen and (min-width: 1500px)
  #search
    width 50%
    margin-left 25%

@media screen and (max-width 1500px)
  #search
    width 60%
    margin-left 20%
</style>