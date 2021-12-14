<template>
  <div id="side-bar" class="container ml-12">
    <div class="container border-bottom pb-4">
      <div class="mb-4 font-3">关于我</div>
      <img src="../assets/img/avatar.jpg"/>
      <div class="mt-4 font-2">
        程序员，使用 Java、Python。
      </div>
      <div class="container flex-row font-4 mt-4">
        <div class="mr-4">
          <a href="https://github.com/limyel">
            <i class="fa fa-github color-dark" aria-hidden="true"></i>
          </a>
        </div>
        <div class="mr-4">
          <a href=mailto:me@limyel.com>
            <i class="fa fa-envelope-o color-dark" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="container border-bottom pb-2 mt-4">
      <div class="mb-4 font-3">最新评论</div>
      <div class="container font-1 line-height-6 mb-3">
        <div>
          <a href="#" class="color-secondary">limyel</a>:&nbsp;&nbsp;附件是老款的房间里时间分厘卡圣诞节离开的付款了撒旦克里夫山卡拉地方艰苦拉萨的饭卡里说的JFK拉萨酱豆腐立刻决定弗兰克是
        </div>
        <div class="color-secondary font-1">
          <a href="#" class="color-secondary">hello world</a>&nbsp;|&nbsp;三天前
        </div>
      </div>
      <div class="container font-1 line-height-6 mb-3">
        <div>
          <a href="#">limyel</a>:&nbsp;&nbsp;附件是老款的房间里时间分厘卡圣诞节离开的付款了撒旦克里夫山卡拉地方艰苦拉萨的饭卡里说的JFK拉萨酱豆腐立刻决定弗兰克是
        </div>
        <div class="color-secondary font-1">
          <a href="#" class="color-secondary">hello world</a>&nbsp;|&nbsp;三天前
        </div>
      </div>
      <div class="container font-1 line-height-6 mb-3">
        <div>
          <a href="#">limyel</a>:&nbsp;&nbsp;附件是老款的房间里时间分厘卡圣诞节离开的付款了撒旦克里夫山卡拉地方艰苦拉萨的饭卡里说的JFK拉萨酱豆腐立刻决定弗兰克是
        </div>
        <div class="color-secondary font-1">
          <a href="#" class="color-secondary">hello world</a>&nbsp;|&nbsp;三天前
        </div>
      </div>
      <div class="container font-1 line-height-6 mb-3">
        <div>
          <a href="#">limyel</a>:&nbsp;&nbsp;附件是老款的房间里时间分厘卡圣诞节离开的付款了撒旦克里夫山卡拉地方艰苦拉萨的饭卡里说的JFK拉萨酱豆腐立刻决定弗兰克是
        </div>
        <div class="color-secondary font-1">
          <a href="#" class="color-secondary">hello world</a>&nbsp;|&nbsp;三天前
        </div>
      </div>
      <div class="container font-1 line-height-6 mb-3">
        <div>
          <a href="#">limyel</a>:&nbsp;&nbsp;附件是老款的房间里时间分厘卡圣诞节离开的付款了撒旦克里夫山卡拉地方艰苦拉萨的饭卡里说的JFK拉萨酱豆腐立刻决定弗兰克是
        </div>
        <div class="color-secondary font-1">
          <a href="#" class="color-secondary">hello world</a>&nbsp;|&nbsp;三天前
        </div>
      </div>
    </div>

    <div class="container border-bottom mt-4 pb-2">
      <div class="mb-4 font-3">最热文章</div>
      <div class="mb-2" v-for="(hotPost, index) in hotPosts" :key="index">
        <router-link :to="{name: 'Post', params: {slug: hotPost.slug}}" class="font-2 color-secondary">{{ hotPost.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {apiPostHot} from "@/request/api/post";

export default {
  name: "SideBar",
  data() {
    return {
      hotPosts: []
    }
  },
  mounted() {
    apiPostHot().then(response => {
      this.hotPosts = response.data;
    })
  }
}
</script>

<style lang="stylus">
  #side-bar
    width 220px
</style>