import { userIsExist, registerUser } from '../../data-source/user/requestApi';
import { awaitWrap } from '../../utils/index';

class UserService {
  static userIsExist(userName) {
    return awaitWrap(userIsExist(userName));
  }

  static registerUser({ userName, password, gender }) {
    return awaitWrap(registerUser({ userName, password, gender }));
  }
}

export default UserService;
