<template>
  <div id="home">
    <div class="archive-block" v-for="(year, index) in Object.keys(posts)" :key="index">
      <div class="archive-year">
        {{year}}
      </div>
      <div class="archive-item" v-for="(post, index) in posts[year]" :key="index">
        <div class="archive-item-date">
          {{post.createTime | showMonthDayLocal}}
        </div>
        <div class="archive-item-title">
          <router-link :to="{name: 'tag_detail'}">{{post.title}}</router-link>
        </div>
        <div class="archive-item-tags" v-for="(tag, index) in post.tagList" :key="index">
          <div class="archive-item-tag">
            <a href="">{{tag.name}}</a>
          </div>
        </div>
      </div>
    </div>

    <Page v-if="false"/>
  </div>
</template>

<script>
import Page from "../components/Page.vue";
import {apiPostInHome} from "@/api/post";
import {showMonthDayLocal} from "@/utils/DateTimeFormat";

export default {
  name: "Home",
  data() {
    return {
      posts: Object
    }
  },
  components: {
    Page
  },
  mounted() {
    apiPostInHome(1).then(response => {
      this.posts = response.data.result;

    })
  },
  filters: {
    showMonthDayLocal
  }
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
}

.archive-year {
  font-size: 2rem;
  margin: 35px 0;
}

.archive-block {
  width: 100%;
}

.archive-item {
  display: flex;
  flex-direction: row;
  line-height: 1.6rem;
  width: 100%;
  margin: 10px 0;
}

.archive-item-date {
  margin-right: 50px;
}

.archive-item-title {
  flex-grow: 1;
}

.archive-item-tags {
  display: flex;
  flex-direction: row;
}
.archive-item-tag {
  padding: 0.4rem;
  font-size: 0.8rem;
  line-height: 100%;
  margin-left: 10px;
  border: 2px solid #000000;
  border-radius: 5px;
}

</style>