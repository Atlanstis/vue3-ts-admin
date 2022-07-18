<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="loginType" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <div class="pane-wrap">
            <el-icon :size="20"><Icon-User /></el-icon>
            <span>账号登录</span>
          </div>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <div class="pane-wrap">
            <el-icon :size="20"><Icon-Iphone /></el-icon>
            <span>手机登录</span>
          </div>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginType = ref('account')

    const handleLoginClick = () => {
      if (loginType.value === 'password') {
        accountRef.value?.loginAction()
      }
    }

    return {
      loginType,
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="scss">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .pane-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 4px;
    }
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
