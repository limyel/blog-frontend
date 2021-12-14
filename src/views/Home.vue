<template>
  <div id="home" class="container flex-row">
    <div class="container flex-grow-1 mr-12">

      <div class="container mb-12" v-for="(post, index) in posts" :key="index">
        <div class="font-6 mb-5">
          <router-link :to="{name: 'Post', params: {'slug': post.slug}}">{{ post.title }}</router-link>
        </div>
        <div class="container flex-row font-1 color-secondary mb-5">
          <div>发布于&nbsp;&nbsp;{{ post.createdAt | showTimeShort }}</div>&nbsp;&nbsp;
        </div>
        <div class="container flex-row font-1 mb-5">
          <div class="bg-secondary p-1 mr-3" style="background-color: #dedede" v-for="(tag, index) in post.tags" :key="index">
            <a class="color-secondary" href="#">{{ tag.name }}</a>
          </div>
        </div>
        <div class="color-secondary font-2 mb-5" style="white-space:normal; word-break:break-all;overflow:hidden;">
          {{ post.introduction }}
        </div>
        <div class="font-3">
          <router-link :to="{name: 'Post', params: {'slug': post.slug}}">阅读全文&nbsp;></router-link>
        </div>
      </div>

      <Page :page-info="pageInfo"></Page>
    </div>



    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Page from "@/components/Page";
import {apiPostInHome} from "@/request/api/post";
import {showTimeShort} from "@/utils/TimeUtil";

export default {
  name: "Home",
  components: {SideBar, Page},
  data() {
    return {
      posts: [],
      pageInfo: {},
    }
  },
  mounted() {
    let pageNum = this.$route.query['pageNum']
    if (pageNum === undefined) {
      pageNum = 1
    }
    apiPostInHome(pageNum).then(response => {
      this.posts = response.data.list
      let _data = response.data
      delete _data.list
      delete _data.navigatepageNums
      this.pageInfo = _data
    });
  },
  filters: {
    showTimeShort
  }
}
</script>

<style lang="stylus">

</style>