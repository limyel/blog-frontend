<template>
  <div id="side-bar">
    <div class="side-bar-item">
      <div class="side-bar-item-title">
        关于我
      </div>
      <div class="side-bar-item-content">
        <img src="../assets/img/logo.png" width="220px" height="220px">
        <div class="about-me">
          程序员，泉州人在福州，使用 Java、Python、Go 和 JavaScript 编写代码。
        </div>
        <div class="find-me">
          <div>
            <a href="https://github.com/limyel">
              GitHub
            </a>
          </div>
          &nbsp;&nbsp;
          <div>
            <a href=mailto:me@limyel.com>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="side-bar-item">
      <div class="side-bar-item-title">
        最新评论
      </div>
    </div>

    <div class="side-bar-item">
      <div class="side-bar-item-title">
        最热文章
      </div>
    </div>
  </div>
</template>

<style scoped>
#side-bar {
  display: flex;
  flex-direction: column;
  width: 220px;
}

.side-bar-item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E1E1E1;;
  margin-bottom: 15px;
}

.side-bar-item-title {
  margin-bottom: 15px;
}

.side-bar-item-content {
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.about-me {
  margin: 10px 0;
}

.find-me {
  display: flex;
  flex-direction: row;
}
.find-me * {
  color: #0d6efd;
}
</style>