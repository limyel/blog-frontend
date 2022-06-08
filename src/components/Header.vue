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
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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