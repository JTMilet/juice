/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 16:27:12
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import 'normalize.css/normalize.css'
import '@arco-design/web-vue/dist/arco.css'
import Router from './router'
import App from './App.vue'
import './styles/main.css'

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .use(Router)
  .use(ArcoVue)
  .mount('#app')
