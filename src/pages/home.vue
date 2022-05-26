<template>
  <div id="home">
    <div class="archive-block">
      <div class="archive-year">
        2022
      </div>
      <div class="archive-item">
        <div class="archive-item-date">
          五月 26
        </div>
        <div class="archive-item-title">
          Python 从入门到入坟
        </div>
        <div class="archive-item-tags">
          <div class="archive-item-tag">
            Python
          </div>
          <div class="archive-item-tag">
            入门
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
#home {
  display: flex;
}

.archive-year {
  font-size: 2rem;
  margin: 35px 0;
}

.archive-item {
  display: flex;
  flex-direction: row;
  line-height: 1.6rem;
}

.archive-item-date {

}

.archive-item-tags {
  display: flex;
  flex-direction: row;
}
.archive-item-tag {
  padding: 0.4rem;
  font-size: 0.8rem;
  line-height: 100%;
  border: 2px solid #000000;
  border-radius: 5px;
}
</style>