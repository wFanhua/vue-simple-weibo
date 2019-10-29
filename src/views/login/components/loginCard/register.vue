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
      <el-button style="width: 100%;" type="primary">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  USER_GENDER_OPTIONS,
  USER_NAME_TIP,
  USER_PASSWORD_TIP,
  USER_PASSWORD_NOT_SAME_TIP,
  USER_REPEAT_PASSWORD_TIP,
  USER_NAME_ISEXIST_TIP,
} from '../../../../constants/user';
import UserService from '../../../../domains/user/UserService';

export default {
  data() {
    return {
      form: {
        userName: '',
        password: '',
        repeatPassword: '',
        gender: '1',
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
    validUserIsExist(rule, value, callback) {
      if (!value) return callback(new Error(USER_NAME_TIP));
      return UserService.userIsExist(value).then((isExist) => {
        if (isExist) callback(new Error(USER_NAME_ISEXIST_TIP));
        else callback();
      });
    },
    validPassword(rule, value, callback) {
      if (!value) return callback(new Error(USER_PASSWORD_TIP));

      if (this.form.repeatPassword !== '') {
        this.$refs.form.validateField('repeatPassword');
      }
      return callback();
    },
    validRepeatPassword(rule, value, callback) {
      if (!value) return callback(new Error(USER_REPEAT_PASSWORD_TIP));
      if (value !== this.form.password) {
        return callback(new Error(USER_PASSWORD_NOT_SAME_TIP));
      } return callback();
    },
  },
};
</script>
