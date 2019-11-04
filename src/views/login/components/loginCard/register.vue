<template>
  <el-form ref="form" :model="form" :rules="rules">
    <el-form-item label="" prop="userName">
      <el-input
        v-model="form.userName"
        placeholder="请输入用户名"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input
        v-model="form.password"
        placeholder="请输入密码"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="" prop="repeatPassword">
      <el-input
        v-model="form.repeatPassword"
        placeholder="重新输入密码"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="" required>
      <el-radio-group v-model="form.gender">
        <el-radio
          v-for="(item, index) in genders"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        @click="handleRegister"
        style="width: 100%;"
        type="primary"
      >注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Message } from 'element-ui';
import {
  USER_GENDER_OPTIONS,
  USER_NAME_TIP,
  USER_PASSWORD_TIP,
  USER_PASSWORD_NOT_SAME_TIP,
  USER_REPEAT_PASSWORD_TIP,
  USER_NAME_ISEXIST_TIP,
  USER_NAME_INVALID_TIP,
  USER_PASSWORD_INVALID_TIP,
} from '../../../../constants/user';
import UserService from '../../../../domains/user/UserService';

export default {
  data() {
    return {
      loading: false,
      form: {
        userName: '',
        password: '',
        repeatPassword: '',
        gender: 1,
      },
      rules: {
        userName: [
          { validator: this.validUserIsExist, trigger: 'blur' },
        ],
        password: [
          { validator: this.validPassword, trigger: 'blur' },
        ],
        repeatPassword: [
          { validator: this.validRepeatPassword, trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    genders() {
      return USER_GENDER_OPTIONS;
    },
  },
  methods: {
    async handleRegister() {
      this.loading = true;
      const valid = await this.$refs.form.validate();
      if (valid) await this.register();
      this.loading = false;
    },
    async register() {
      const { userName, password, gender } = this.form;
      const payload = { userName, password, gender };
      const [error, token] = await UserService.registerUser(payload);
      if (error) Message.error(error.message);
      if (token) this.$emit('register', { token });
    },
    async validUserIsExist(rule, value) {
      if (!value) throw new Error(USER_NAME_TIP);
      if ((value && value.length < 6)
        || (value && value.length > 20)
        || (value && !/^[a-zA-Z][a-zA-Z0-0_]+$/.test(value))) {
        throw new Error(USER_NAME_INVALID_TIP);
      }
      const [error, isExist] = await UserService.userIsExist(value);
      if (error) throw new Error(error.message);
      if (isExist) throw new Error(USER_NAME_ISEXIST_TIP);
    },
    validPassword(rule, value) {
      if (!value) return Promise.reject(new Error(USER_PASSWORD_TIP));
      if (this.form.repeatPassword !== '') {
        this.$refs.form.validateField('repeatPassword');
      }
      if (!(value.length >= 6 && value.length <= 255)) {
        return Promise.reject(new Error(USER_PASSWORD_INVALID_TIP));
      }

      return Promise.resolve();
    },
    validRepeatPassword(rule, value) {
      if (!value) return Promise.reject(new Error(USER_REPEAT_PASSWORD_TIP));
      if (value !== this.form.password) {
        return Promise.reject(new Error(USER_PASSWORD_NOT_SAME_TIP));
      } return Promise.resolve();
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
