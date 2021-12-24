<template>
  <div>

  </div>
</template>

<script>
import {apiMemberInfo} from "@/request/api/login";

export default {
  name: "GithubRedirect",
  mounted() {
    let code = this.$route.query.code;
    console.log(this.$route.query);
    apiMemberInfo(code).then(response => {
      let jwt = response.data.jwt;
      let memberInfo = response.data.memberInfo;
      localStorage.setItem('JWT_TOKEN', jwt);
      localStorage.setItem('AVATAR', memberInfo.avatar);
      this.$router.push({'name': 'Post', params: {'slug': localStorage.getItem('slug')}});
    })
  }
}
</script>

<style lang="stylus">

</style>