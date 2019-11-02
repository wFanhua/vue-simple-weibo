import { USER_TOKEN_KEY } from '../../constants/user';

class UserLocal {
  static setUserToken(token) {
    window.localStorage.setItem(USER_TOKEN_KEY, token);
  }

  static getUserToken() {
    return window.localStorage.getItem(USER_TOKEN_KEY);
  }
}

export default UserLocal;
