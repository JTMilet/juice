/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 19:15:01
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src/')
    }
  },
  server: {
    proxy: {
      '/juice-end': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/juice\-end/, '')
      }
    }
  }
})
