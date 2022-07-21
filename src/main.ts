/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 09:32:50
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css';
import './main.css'
// import './style.css'
import App from './App.vue'

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .mount('#app')
