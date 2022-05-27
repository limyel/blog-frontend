<template>
  <div id="header">
    <div class="logo">
      limyel's blog
    </div>
    <div class="description">
      程序员，泉州人在福州，使用 Java、Python、Go 和 JavaScript 开发。
    </div>
    <div class="navication">
      <router-link :to="{name: 'Home'}" class="navication-item" :class="activeNav === 'Home'? 'nav-item-active': ''">首页</router-link>
      <router-link :to="{name: 'Tag'}" class="navication-item" :class="activeNav === 'Tag'? 'nav-item-active': ''">标签</router-link>
      <router-link :to="{name: 'Search'}" class="navication-item" :class="activeNav === 'Search'? 'nav-item-active': ''">搜索</router-link>
      <router-link :to="{name: 'About'}" class="navication-item" :class="activeNav === 'About'? 'nav-item-active': ''">关于</router-link>
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
  flex-direction: column;
  border-bottom: 2px solid #000000;
  padding: 10px;
}

.logo {
  font-size: 35px;
}

.description {
  font-size: 0.9rem;
  margin-top: 5px;
  color: #6c757d;
}

.navication {
  display: flex;
  flex-direction: row;
  justify-content: right;
  line-height: 45px;
  flex-grow: 1;
  margin-left: 50px;
}
.navication-item {
  margin-left: 30px;
}

</style>