/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 15:22:59
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import 'normalize.css/normalize.css'
// import './style.css'
import '@arco-design/web-vue/dist/arco.css'
import './main.css'
import Router from './router'
import App from './App.vue'

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .use(Router)
  .use(ArcoVue)
  .mount('#app')
