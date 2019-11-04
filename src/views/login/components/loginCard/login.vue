<template>
  <el-form ref="form" :model="form" :rules="rules">
    <el-form-item label="" prop="userName">
      <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        @click="handleLogin"
        style="width: 100%;"
        type="primary"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Message } from 'element-ui';
import UserService from '../../../../domains/user/UserService';

export default {
  data() {
    return {
      loading: false,
      form: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      const valid = await this.$refs.form.validate();
      if (valid) await this.login();
      this.loading = false;
    },
    async login() {
      const { userName, password } = this.form;
      const payload = { userName, password };
      const [error, token] = await UserService.loginUser(payload);
      if (error) Message.error(error.message);
      if (token) this.$emit('login', { token });
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
