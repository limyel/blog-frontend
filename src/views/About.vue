<template>
  <div id="about">
    <div class="container mb-9" v-for="(about, index) in aboutList" :key="index">
      <div class="font-6 color-secondary" style="font-weight: bold">{{ about.title }}</div>
      <div class="container pt-2">
        <li class="font-2 mb-1" style="list-style-type: circle" v-for="(aboutItem, index) in about.items" :key="index">
          <a :href="aboutItem.link" class="color-info">{{ aboutItem.name }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ aboutItem.description }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import {apiAboutList} from "@/request/api/about";

export default {
  name: "About",
  data() {
    return {
      aboutList: []
    }
  },
  mounted() {
    apiAboutList().then(response => {
      this.aboutList = response.data;
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

</style>