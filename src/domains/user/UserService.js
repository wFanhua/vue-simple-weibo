import {
  userIsExist, registerUser, loginUser, userInfo,
} from '../../data-source/user/requestApi';
import { awaitWrap } from '../../utils/index';

class UserService {
  static userIsExist(userName) {
    return awaitWrap(userIsExist(userName));
  }

  static registerUser({ userName, password, gender }) {
    return awaitWrap(registerUser({ userName, password, gender }));
  }

  static loginUser({ userName, password }) {
    return awaitWrap(loginUser({ userName, password }));
  }

  static userInfo() {
    return awaitWrap(userInfo());
  }
}

export default UserService;
