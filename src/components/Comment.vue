<template>
  <div id="comment">
    <div class="container flex-row pl-12 pr-12" v-if="isLogin">
      <div class="container mr-3">
        <img class="avatar" src="../assets/img/avatar.jpg">
      </div>
      <div class="container flex-grow-1">
        <textarea class="form-textarea resize-vertical"></textarea>
        <div class="container flex-row-reverse mt-3">
          <button class="btn btn-successful w-2 color-light">发布</button>
          <button class="btn btn-info w-2 color-light mr-3">预览</button>
        </div>
      </div>
    </div>

    <div class="container flex-row-reverse" v-else>
      <a class="btn btn-info font-2" :href="url" @click.stop="beforeLogin">通过 GitHub 登录</a>
    </div>
  </div>

</template>

<script>
import {config} from "@/config";

export default {
  name: "Comment",
  props: {
    slug: null
  },
  data() {
    return {
      isLogin: false,
      url: config.GITHUB_AUTH_URL + '?' + 'client_id=' + config.CLIENT_ID,
      avatar: ''
    }
  },
  mounted() {
    if (localStorage.getItem('JWT_TOKEN') != null) {
      this.isLogin = true;
      this.avatar = localStorage.getItem('AVATAR');
    }
  },
  methods: {
    beforeLogin() {
      localStorage.setItem('slug', this.slug);
    }
  }
}
</script>

<style scoped>

</style>