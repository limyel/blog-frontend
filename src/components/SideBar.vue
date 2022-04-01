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
      <div class="container font-1 line-height-6 mb-3" v-for="(comment, index) in latestComments" :key="index">
        <div>
          <a :href="comment.user.htmlUrl" class="color-secondary">{{ comment.user.name }}</a>:&nbsp;&nbsp;{{ comment.content }}
        </div>
        <div class="color-secondary font-1">
          <router-link :to="{name: 'Post', params: {slug: comment.post.slug}}" class="color-secondary">{{ comment.post.title }}</router-link>
          &nbsp;|&nbsp;{{ comment.createTime| showTimeShort }}
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
import {apiCommentLatest} from "@/request/api/comment";
import {showTimeShort} from "@/utils/TimeUtil";

export default {
  name: "SideBar",
  data() {
    return {
      hotPosts: [],
      latestComments: []
    }
  },
  mounted() {
    apiPostHot().then(response => {
      this.hotPosts = response.data;
    });

    apiCommentLatest().then(response => {
      this.latestComments = response.data;
    })
  },
  filters: {
    showTimeShort
  }
}
</script>

<style lang="stylus">
  #side-bar
    width 220px
</style>