<template>
  <el-card>
    <el-tabs stretch v-model="activeName">
      <el-tab-pane label="登录" name="login">
        <login></login>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <register></register>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
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
};
</script>
