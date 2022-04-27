<template>
  <div id="weekly">
    <div class="container flex-row mb-2 p-2 post-block" v-for="(post, index) in posts" :key="index">
      <div class="container flex-grow-1 font-3">
        <router-link :to="{name: 'Post', params: {'slug': post.slug}}">{{ post.title }}</router-link>
      </div>
      <div class="color-secondary font-3">
        {{ post.createTime| showTimeDetail }}
      </div>
    </div>
  </div>
</template>

<script>
import {apiWeekly} from "@/request/api/post";
import {showTimeDetail} from "@/utils/TimeUtil";

export default {
  name: "Weekly",
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    apiWeekly().then(response => {
      this.posts = response.data.list;
    })
  },
  filters: {
    showTimeDetail
  }
}
</script>

<style lang="stylus">

@media screen and (min-width: 1500px)
  #weekly
    width 50%
    margin-left 25%

@media screen and (max-width 1500px)
  #weekly
    width 60%
    margin-left 20%

.post-block:hover
  background-color #dee2e6


.github-markdown-body
  padding 30px 0
</style>