<template>
  <div id="header">
    <div id="logo">
      limyel's blog
    </div>
    <div class="navication">
      <router-link :to="{name: 'Home'}" class="navication-item" :class="activeNav === 'Home'? 'nav-item-active': ''">首页</router-link>
<!--      <router-link :to="{name: 'Archives'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Archives'? 'nav-item-active': ''">归档</router-link>-->
<!--      <router-link :to="{name: 'Tags'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Tags'? 'nav-item-active': ''">标签</router-link>-->
<!--      <router-link :to="{name: 'Weekly'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Weekly'? 'nav-item-active': ''">周报</router-link>-->
<!--      <router-link :to="{name: 'Search'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'Search'? 'nav-item-active': ''">搜索</router-link>-->
<!--      <router-link :to="{name: 'About'}" class="container font-3 justify-content-center mr-8" :class="activeNav === 'About'? 'nav-item-active': ''">关于</router-link>-->
<!--      <router-link to="" class="container font-3 justify-content-center mr-8">吐槽</router-link>-->
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#header {
  display: flex;
  border-bottom: 1px solid #E1E1E1;
  padding: 5px;
  margin-bottom: 15px;
}

#logo {
  font-size: 35px;
}

.navication {
  display: flex;
  line-height: 45px;
  flex-grow: 1;
  margin-left: 50px;
}
.navication-item {
  margin-right: 30px;
}

</style>