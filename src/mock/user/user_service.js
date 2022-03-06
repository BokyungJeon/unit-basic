class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // 네트워크하는 부분은 따로 만드는 것이 단위테스트하기에도 좋다.(mock이나 stub으로 대체 가능)
      return this.userClient
        .login(id, password) //
        .then((data) => {
          this.isLogedIn = true;
        });
    }
  }
}

module.exports = UserService;
