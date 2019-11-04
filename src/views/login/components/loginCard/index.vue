<template>
  <el-card>
    <el-tabs stretch v-model="activeName">
      <el-tab-pane label="登录" name="login">
        <login ref="login" @login="handleLogin"></login>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <register ref="register" @register="handleRegister"></register>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import UserLocal from '../../../../domains/user/UserLocal';

import Register from './register.vue';
import Login from './login.vue';

export default {
  components: {
    Register,
    Login,
  },
  data() {
    return {
      activeName: 'login',
    };
  },
  methods: {
    handleLogin({ token }) {
      UserLocal.setUserToken(token);
    },
    handleRegister({ token }) {
      UserLocal.setUserToken(token);
    },
  },
  watch: {
    activeName() {
      this.$refs.login.resetFields();
      this.$refs.register.resetFields();
    },
  },
};
</script>
