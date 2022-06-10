<template>
  <div id="search">
    <div class="search-input">
      <input/>
      <button>搜索</button>
    </div>

    <div class="search-result">
      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>
    </div>

    <Page/>
  </div>
</template>

<script>
import Page from "../components/Page.vue";

export default {
  name: "search",
  components: {
    Page
  }
}
</script>

<style scoped>
#search {
  display: flex;
  flex-direction: column;
}

.search-input {
  display: flex;
  height: 40px;
  margin: 35px 0;
}
.search-input * {
  font-size: 20px;
}
.search-input input {
  padding: 10px;
  flex-grow: 1;
}
.search-input button {
  width: 90px;
  margin-left: 10px;
}

.search-result {
  flex-grow: 1;
}

.search-result-item {
  margin: 35px 0;
}
.search-result-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
</style>