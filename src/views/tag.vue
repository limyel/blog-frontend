<template>
  <div>
    <div class="tag" v-for="(tag, index) in tagList" :key="index">
      <div class="tag—link">
        <router-link to="">{{tag.name}}</router-link>
      </div>
      <div class="tag-post-num">
        {{tag.postNum}}
      </div>
    </div>

    <Page v-if="false"/>
  </div>
</template>

<script>
import Page from "../components/Page.vue";
import {apiPageTag} from "@/api/tag";

export default {
  name: "tag",
  components: {
    Page
  },
  data() {
    return {
      tagList: []
    }
  },
  mounted() {
    apiPageTag(1).then(response => {
      this.tagList = response.data.list;
      console.log(this.tagList);
    })
  }
}
</script>

<style scoped>
.tag {
  display: flex;
  flex-direction: row;
  /*border-bottom: 1px solid #E1E1E1;*/
  margin: 35px 0;
  justify-content: space-between;
  line-height: 1.6rem;
}

.tag—link {
  padding: 0.4rem;
  font-size: 0.8rem;
  line-height: 100%;
  margin-left: 10px;
  border: 2px solid #000000;
  border-radius: 5px;
}

.tag-post-num {
  margin-left: 100px;
}
</style>