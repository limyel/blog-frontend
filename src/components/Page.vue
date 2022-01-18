<template>
  <div id="page" class="container flex-row font-2">
    <div class="mr-5"><a :href="'?pageNum=' + pageInfo.prePage" v-if="!pageInfo.isFirstPage">上一页</a></div>
    <div class="mr-5" v-for="(pageNum, index) in getPageNums" :key="index">
      <a v-if="pageNum > 0" :href="'?pageNum=' + pageNum"
         :style="pageNum === pageInfo.pageNum? 'pointer-events: none;':''"
          :class="pageNum === pageInfo.pageNum? 'color-info':''">{{ pageNum }}</a>
      <span v-else>...</span>
    </div>
    <div class="mr-5"><a :href="'?pageNum=' + pageInfo.nextPage" v-if="!pageInfo.isLastPage">下一页</a></div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    pageInfo: {}
  },
  data() {
    return {
      pageNums: []
    }
  },
  computed: {
    getPageNums() {
      let pageNums = []
      if (this.pageInfo.pages <= 10 && this.pageInfo.pages > 1) {
        pageNums = Array.from({length: this.pageInfo.pages}, (item, index) => index + 1)
      } else if (this.pageInfo.pages > 10) {
        let tmpSet = new Set([1, 2])
        if (!this.pageInfo.isFirstPage) {
          tmpSet.add(this.pageInfo.pageNum-1)
        }
        tmpSet.add(this.pageInfo.pageNum)
        if (!this.pageInfo.isLastPage) {
          tmpSet.add(this.pageInfo.pageNum+1)
        }
        tmpSet.add(this.pageInfo.pages-1)
        tmpSet.add(this.pageInfo.pages)

        for (let i of tmpSet.values()) {
          if (i !== 1 && i !== this.pageInfo.pages && i-pageNums[pageNums.length-1] > 1) {
            pageNums.push(0)
          }
          pageNums.push(i)
        }
      }
      return pageNums
    }
  }

}
</script>

<style lang="stylus">

</style>