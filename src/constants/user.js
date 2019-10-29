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
