<template>
  <div id="header" class="container flex-row pl-12 pr-12 pt-2 pb-2 border-bottom border-box">
    <div class="container font-7 pr-12" id="logo">
      limyel's blog
    </div>
    <div class="container flex-row pl-12">
      <router-link :to="{name: 'Home'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Home'? 'nav-item-active': ''">首页</router-link>
      <router-link :to="{name: 'Archives'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Archives'? 'nav-item-active': ''">归档</router-link>
      <router-link :to="{name: 'Tags'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Tags'? 'nav-item-active': ''">标签</router-link>
      <router-link :to="{name: 'Weekly'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Weekly'? 'nav-item-active': ''">周报</router-link>
      <router-link :to="{name: 'Read'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Read'? 'nav-item-active': ''">阅读</router-link>
      <router-link :to="{name: 'Search'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Search'? 'nav-item-active': ''">搜索</router-link>
      <router-link :to="{name: 'About'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'About'? 'nav-item-active': ''">关于</router-link>
      <router-link to="" class="container font-3 justify-content-center mr-8">吐槽</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      activeNav: 'Home'
    }
  },

  watch: {
    "$route.path"() {
      this.activeNav = this.$route.name
    }
  },
  mounted() {
    this.activeNav = this.$route.name
  }
}
</script>

<style lang="stylus">
  @media screen and (min-width: 1500px)
    #header
      width 66%
      margin-left 17%

  @media screen and (max-width 1500px)
    #header
      width 80%
      margin-left 10%

</style>