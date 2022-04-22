<template>
  <div id="about">
    <v-md-preview :text="about"/>
  </div>
</template>

<script>
import {apiAbout} from "@/request/api/about";
import {toMd} from "@/utils/MarkdownUtil";

export default {
  name: "About",
  data() {
    return {
      about: ""
    }
  },
  computed: {
    getContent() {
      return toMd(this.about)
    }
  },
  mounted() {
    apiAbout().then(response => {
      this.about = response.data.content;
    })
  }
}
</script>

<style lang="stylus">
  @media screen and (min-width: 1500px)
    #about
      width 50%
      margin-left 25%

  @media screen and (max-width 1500px)
    #about
      width 60%
      margin-left 20%

  .github-markdown-body
    padding 30px 0

</style>