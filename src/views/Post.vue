<template>
  <div id="post" class="container">
    <div class="container border-bottom pb-8 pl-12 pr-12" id="post-body">
      <div class="font-7 text-align-center">{{ post.title }}</div>

      <div class="container font-2">
        <div class="container flex-row">
          <div class="mb-2">发布于:&nbsp;{{ post.createTime| showTimeDetail }}</div>&nbsp;&nbsp;/&nbsp;&nbsp;
          <div class="mb-2">阅读数:&nbsp;{{ post.views }}</div>
        </div>
        <div class="container flex-row">
          <div class="bg-secondary p-1 mr-3" style="background-color: #dedede" v-for="(tag, index) in post.tags" :key="index"><a href="#">{{ tag.name }}</a></div>
        </div>
      </div>

      <v-md-preview :text="post.content"></v-md-preview>

    </div>

    <div class="container border-top pt-3">
      <div class="container">
        
      </div>
      
      <Comment :slug="slug" :post-id="post.id"></Comment>
    </div>

  </div>
</template>

<script>
import {toMd} from "@/utils/MarkdownUtil";
import {apiPostDetail} from "@/request/api/post";
import {showTimeDetail} from "@/utils/TimeUtil";
import Comment from "@/components/Comment";

export default {
  name: "Post",
  components: {Comment},
  data() {
    return {
      post: {},
      slug: ''
    }
  },
  computed: {
    getContent() {
      return toMd(this.post.content)
    }
  },
  mounted() {
    apiPostDetail(this.$route.params['slug']).then(response => {
      this.post = response.data;
      this.slug = this.$route.params['slug'];
      document.title = this.post.title + " - limyel's blog";
    })
  },
  filters: {
    showTimeDetail
  }
}
</script>

<style lang="stylus">

  @font-face {
    font-family: 'jetbrains-mono';
    src: url('../assets/font/JetBrainsMono-Light.ttf')
  }

  //@media screen and (min-width: 1500px)
  //  #post
  //    width 50%
  //    margin-left 25%
  //
  //@media screen and (max-width 1500px)
  //  #post
  //    width 60%
  //    margin-left 20%


</style>