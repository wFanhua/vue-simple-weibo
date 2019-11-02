export const USER_GENDER_MAP = {
  1: '男',
  2: '女',
  3: '保密',
};

export const USER_GENDER_OPTIONS = (() => {
  const genderVals = Object.keys(USER_GENDER_MAP).sort((a, b) => a - b);
  const genders = genderVals.map(key => ({ label: key, name: USER_GENDER_MAP[key] }));
  return genders;
})();

export const USER_TOKEN_KEY = `__${process.env.NODE_ENV}_user_token__`;

export const USER_NAME_ISEXIST_TIP = '用户名已存在';
export const USER_NAME_TIP = '请输入用户名';
export const USER_PASSWORD_TIP = '请输入密码';
export const USER_PASSWORD_NOT_SAME_TIP = '两次密码输入不一致';
export const USER_REPEAT_PASSWORD_TIP = '请再次输入密码';
