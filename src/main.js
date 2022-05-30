import { createApp } from 'vue'
import App from './App.vue'

import router from "./router"

// Markdown 解析
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js'
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

createApp(App)
  .use(router)
  .use(VMdPreview)
  .mount('#app')
