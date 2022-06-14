<template>
  <div>
    <div class="tag-title">
      Python
    </div>

    <div class="archive-block" v-for="(year, index) in Object.keys(posts)" :key="index">
      <div class="archive-year">
        {{year}}
      </div>
      <div class="archive-item" v-for="(post, index) in posts[year]" :key="index">
        <div class="archive-item-date">
          {{post.createTime | showMonthDayLocal}}
        </div>
        <div class="archive-item-title">
          <router-link :to="{name: 'post', params: {'slug': post.slug}}">{{post.title}}</router-link>
        </div>
      </div>
    </div>

    <Page v-if="false"/>
  </div>
</template>

<script>
import Page from "../components/Page.vue";
import {apiPostInTag} from "@/api/post";
import {showMonthDayLocal} from "@/utils/DateTimeFormat";

export default {
  name: "tag_detail",
  components: {
    Page
  },
  data() {
    return {
      tag: {
        name: "Python",
        slug: "python"
      },
      posts: Object
    }
  },
  mounted() {
    apiPostInTag(this.tag.slug, 1).then(response => {
      this.posts = response.data.result;
    })
  },
  methods: {
    pagePost(tagSlug, pageNum) {
      apiPostInTag(tagSlug, pageNum).then(response => {
        this.postList = response.data.list;
      })
    }
  },
  filters: {
    showMonthDayLocal
  }
}
</script>

<style scoped>
.tag-title {
  font-size: 2rem;
  margin-top: 35px;
}

.archive-year {
  font-size: 1.5rem;
  margin: 35px 0;
}

.archive-item {
  display: flex;
  flex-direction: row;
  line-height: 1.6rem;
  width: 100%;
  margin: 10px 0;
}

.archive-item-date {
  /*margin-right: 50px;*/
  width: 100px;
}

.archive-item-title {
  flex-grow: 1;
}

</style>