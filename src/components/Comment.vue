<template>
  <div id="comment">

    <div class="container pl-12 pr-12 pt-5">
      <div class="container flex-row mb-12 pb-3" v-for="(comment, index) in comments" :key="index"
           @mouseover="chooseParentComment(comment)" @mouseout="unchooseParentComment">
        <div class="mr-3">
          <a :href="comment.member.htmlUrl">
            <img class="w-1" style="border-radius: 99px" :src="comment.member.avatarUrl"/>
          </a>
        </div>
        <div class="">
          <div class="container flex-row font-2 color-secondary">
            <div class="mr-5">
              {{ comment.member.name }}
            </div>
            <div class="flex-grow-1">
              发布于&nbsp;{{ comment.createdAt| showTimeDetail }}
            </div>
            <div class="" v-if="parentComment !== null && parentComment.id === comment.id">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="reply">回复</span>
            </div>
          </div>
          <div class="font-3 mt-2">
            {{ comment.content }}
          </div>
        </div>
      </div>
    </div>


    <div class="container flex-row pl-12 pr-12" v-if="isLogin">
      <div class="container mr-3">
        <img class="avatar" src="../assets/img/avatar.jpg">
      </div>
      <div class="container flex-grow-1">
        <textarea class="form-textarea resize-vertical" v-model="content"></textarea>
        <div class="container flex-row-reverse mt-3">
          <button class="btn btn-successful w-2 color-light" @click="save">发布</button>
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
import {apiCommentByPostId, apiCommentSave} from "@/request/api/comment";
import {showTimeDetail} from "@/utils/TimeUtil";

export default {
  name: "Comment",
  props: {
    slug: null,
    postId: null,
  },
  data() {
    return {
      isLogin: false,
      url: config.GITHUB_AUTH_URL + '?' + 'client_id=' + config.CLIENT_ID,
      avatar: '',
      content: '',
      parentComment: null,
      comments: []
    }
  },
  mounted() {
    if (localStorage.getItem('JWT_TOKEN') != null) {
      this.isLogin = true;
      this.avatar = localStorage.getItem('AVATAR');
    }

    apiCommentByPostId(this.postId).then(response => {
      this.comments = response.data;
    })
  },
  methods: {
    beforeLogin() {
      localStorage.setItem('slug', this.slug);
    },
    save() {
      if (this.content === '') {
        console.log("error");
      }
      let comment = {
        content: this.content,
        postId: this.postId,
        parentId: this.parentId
      }
      apiCommentSave(comment).then(response => {
        console.log(response);

        this.content = '';

        apiCommentByPostId(this.postId).then(response => {
          this.comments = response.data;
        })
      });
    },
    chooseParentComment(comment) {
      this.parentComment = comment;
    },
    unchooseParentComment() {
      this.parentComment = null;
    }
  },
  filters: {
    showTimeDetail
  }
}
</script>

<style lang="stylus">

.reply
  cursor pointer

</style>