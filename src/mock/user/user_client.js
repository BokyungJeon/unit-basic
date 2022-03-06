// 네트워크하는 부분은 따로 만드는 것이 단위테스트하기에도 좋다.(mock이나 stub으로 대체 가능)
class UserClient {
  login(id, password) {
    return fetch('http://example.com/login/id+password') //
      .then((response) => response.json());
  }
}

module.exports = UserClient;
