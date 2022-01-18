<template>
  <div>

  </div>
</template>

<script>
import {apiUserInfo} from "@/request/api/login";

export default {
  name: "GithubRedirect",
  mounted() {
    let code = this.$route.query.code;
    apiUserInfo(code).then(response => {
      let jwt = response.data.jwt;
      let userInfo = response.data.userInfo;
      localStorage.setItem('JWT_TOKEN', jwt);
      localStorage.setItem('AVATAR', userInfo.avatarUrl);
      this.$router.push({'name': 'Post', params: {'slug': localStorage.getItem('slug')}});
    })
  }
}
</script>

<style lang="stylus">

</style>