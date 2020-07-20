import LoginUser from "@/services/login-user";
import store from "@/store";
import User from "@/models/user";
import LoginApiMock from "../mocks/login-api-mock";

describe("For LoginUser Service", () => {
  it("validation is wrong when a bad user/password is passed", async () => {
    const implementation = {
      getUser: jest.fn(() => undefined)
    };
    const api = new (LoginApiMock(implementation))();
    const login: LoginUser = new LoginUser(store, api);

    expect(await login.validate("lololololo", "lalalalalalal")).toBeFalsy();
    expect(store.state.user).toBe(undefined);
  });

  it("validation is ok when a valid user/password is passed", async () => {
    const user = new User(1, "Joel", "joel.coll@gmail.com", "123456");
    const implementation = {
      getUser: jest.fn(() => user)
    };
    const api = new (LoginApiMock(implementation))();
    const login: LoginUser = new LoginUser(store, api);

    expect(await login.validate(user.username, user.password)).toBeTruthy();
    expect(store.state.user).toEqual(user);
  });
});
