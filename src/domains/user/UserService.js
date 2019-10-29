import { userIsExist } from '../../data-source/user/requestApi';

class UserService {
  static userIsExist(userName) {
    return userIsExist(userName);
  }
}

export default UserService;
