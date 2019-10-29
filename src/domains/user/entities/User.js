import { USER_GENDER_MAP } from '../../../constants/user';

class User {
  constructor(user = {}) {
    this.id = user.id;
    this.userName = user.userName;
    this.nickName = user.nickName;
    this.password = user.password;
    this.repeatPassword = user.repeatPassword;
    this.gender = user.gender;
    this.picture = user.picture;
    this.city = user.city;
  }

  get genderName() {
    return USER_GENDER_MAP[this.gender] || '缺失';
  }
}

export default User;
