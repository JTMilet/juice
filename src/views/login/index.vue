<!--
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 14:46:38
-->
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const form = reactive({
  account: "",
  password: "",
});
const welcomeWords = ref("");
const mounted = onMounted(() => {
  // axios({
  //   method: 'get',
  //   url: '/juice-end/cats',
  // })
  //   .then((res: any) => {
  //     welcomeWords.value = res.data
  //   })
});

const login = (e: any) => {
  e.stopPropagation();
  router.push("/");
  // axios({
  //   method: "post",
  //   url: "/juice-end/login",
  // }).then((res: any) => {
  //   if (res.data.code === 200) {
  //     if (res.data.data) {
  //     } else {
  //       message.error(res.data.message);
  //     }
  //   }
  //   // console.log('🚀 ~ .then ~ res', res)
  //   // welcomeWords.value = res.data
  // });
};
</script>

<template>
  <section class="w-full h-full flex justify-center items-center bg-gray-50">
    <div class="w-96 h-96 rounded-xl shadow-xl p-4 border flex flex-col justify-center items-center space-y-4 bg-white">
      <a-avatar :size="64">Juice</a-avatar>
      <div>{{ welcomeWords }}</div>
      <a-from class="w-full">
        <a-form-item
          field="account"
          label="账户"
        >
          <a-input
            v-model="form.account"
            placeholder="请输入账户"
          />
        </a-form-item>
        <a-form-item
          field="post"
          label="密码"
        >
          <a-input
            v-model="form.password"
            placeholder="请输入账户密码"
            type="password"
          />
        </a-form-item>
      </a-from>
      <div class="flex-none flex justify-center items-center">
        <a-button
          type="primary"
          @click="login"
        >登录系统</a-button>
      </div>
    </div>
  </section>
</template>