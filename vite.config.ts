/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 17:21:44
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
  envDir: './env',
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
