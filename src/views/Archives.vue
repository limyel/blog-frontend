<template>
  <div id="archives" class="container">
    <div class="container flex-row font-6" v-for="(year, index) in years" :key="index">
      <div class="container flex-column mr-2">
        <div class="timeline-circle border-primary border-box"></div>
        <div class="ml-2 flex-grow-1 border-left-secondary"></div>
      </div>
      <div class="pb-5" style="width: 100%">
        <div class="font-4 line-height-5">
          {{ year }}
        </div>
        <div class="mb-6 mt-4" style="border-bottom: 1px dashed #e1e1e1; width: 100%" v-for="(post, index) in archives[year]" :key="index">
          <span class="font-2 color-secondary">{{ post.createdAt| showMonthDay }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <router-link :to="{name: 'Post', params: {'slug': post.slug}}" class="font-3 color-secondary" href="#">{{ post.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiPostArchive} from "@/request/api/post";
import {showMonthDay} from "@/utils/TimeUtil";

export default {
  name: "Archive",
  data() {
    return {
      archives: {},
      years: []
    }
  },
  mounted() {
    apiPostArchive().then(response => {
      this.archives = response.data;
      this.years = Object.keys(this.archives).reverse();
    })
  },
  filters: {
    showMonthDay
  }
}
</script>

<style lang="stylus">
@media screen and (min-width: 1500px)
  #archives
    width 50%
    margin-left 25%

@media screen and (max-width 1500px)
  #archives
    width 60%
    margin-left 20%

</style>