<!--
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 19:17:46
-->
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
const form = reactive({
  account: '',
  password: ''
})
const welcomeWords = ref('')
const mounted = onMounted(() => {
  axios({
    method: 'get',
    url: '/juice-end/cats',
  })
    .then((res: any) => {
      welcomeWords.value = res.data
    })
})
</script>

<template>
  <section class="w-full h-full flex justify-center items-center bg-gray-50">
    <div class="w-96 h-96 rounded-xl shadow-xl p-4 border flex flex-col justify-center items-center space-y-8 bg-white">
      <a-avatar :size="64">Juice</a-avatar>
      <div>{{ welcomeWords }}</div>
      <a-from class="w-full">
        <a-form-item field="account" label="账户">
          <a-input v-model="form.account" placeholder="请输入账户" />
        </a-form-item>
        <a-form-item field="post" label="密码">
          <a-input v-model="form.password" placeholder="请输入账户密码" type="password" />
        </a-form-item>
      </a-from>
    </div>
  </section>
</template>