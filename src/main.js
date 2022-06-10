import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';

Vue.config.productionTip = false

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
Vue.use(VMdPreview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
