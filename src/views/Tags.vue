<template>
  <div id="tags">
    <span class="tag pt-2 pb-2 pl-5 pr-5" style="display: inline-block" v-for="(tag, index) in tags" :key="index">
      <router-link class="font-2" :to="{name: 'Tag', params: {'slug': tag.slug, 'name': tag.name}}">{{ tag.name }}<sup class="font-1 color-danger">{{ tag.postNum }}</sup></router-link>
    </span>
  </div>
</template>

<script>
import {apiTagList} from "@/request/api/tag";

export default {
  name: "Tags",
  data() {
    return {
      tags: []
    }
  },
  mounted() {
    apiTagList().then(response => {
      this.tags = response.data;
    })
  }
}
</script>

<style lang="stylus">
@media screen and (min-width: 1500px)
  #tags
    width 50%
    margin-left 25%

@media screen and (max-width 1500px)
  #tags
    width 60%
    margin-left 20%


.tag:hover
  transform scale(1.3)
  a
    color #000000
</style>