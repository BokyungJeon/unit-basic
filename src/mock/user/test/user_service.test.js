// 행동에 대해 검사할 때는 mock을 이용

const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return { login };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClient agin if alread logged in', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');

    expect(login.mock.calls.length).toBe(1);
  });
});
