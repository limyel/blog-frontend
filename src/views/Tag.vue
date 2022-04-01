<template>
  <div id="tag" class="container">
    <div class="font-7 mb-6">{{ tagName }}</div>
    <div class="container flex-row mb-2 p-2 post-in-tag" v-for="(post, index) in posts" :key="index">
      <div class="container flex-grow-1 font-3">
        <router-link :to="{name: 'Post', params: {'slug': post.slug}}">{{ post.title }}</router-link>
      </div>
      <div class="color-secondary font-3">
        {{ post.createTime| showTimeDetail }}
      </div>
    </div>

    <Page :page-info="pageInfo"></Page>
  </div>
</template>

<script>
import Page from "@/components/Page";
import {apiPostTag} from "@/request/api/post";
import {showTimeDetail} from "@/utils/TimeUtil";
import {apiTagDetail} from "@/request/api/tag";

export default {
  name: "Tag",
  components: {
    Page
  },
  data() {
    return {
      tagName: '',
      slug: '',
      posts: [],
      pageInfo: {}
    }
  },
  mounted() {
    this.slug = this.$route.params.slug;
    if (this.$route.params.name === undefined) {
      apiTagDetail(this.slug).then(response => {
        this.tagName = response.data.name;
      })
    } else {
      this.tagName = this.$route.params.name;
    }
    apiPostTag(this.slug).then(response => {
      this.posts = response.data.list;
      let _data = response.data
      delete _data.list
      delete _data.navigatepageNums
      this.pageInfo = _data
    })
  },
  filters: {
    showTimeDetail
  }
}
</script>

<style lang="stylus">
@media screen and (min-width: 1500px)
  #tag
    width 50%
    margin-left 25%

@media screen and (max-width 1500px)
  #tag
    width 60%
    margin-left 20%

.post-in-tag:hover
  background-color #dee2e6
</style>