import { userIsExist, registerUser } from '../../data-source/user/requestApi';

class UserService {
  static userIsExist(userName) {
    return userIsExist(userName);
  }

  static registerUser({ userName, password, gender }) {
    return registerUser({ userName, password, gender });
  }
}

export default UserService;
