import LoginUser from "@/services/login-user";
import store from "@/store";
import User from "@/models/user";
import ResponseApi from "@/models/response-api";
import LoginApiMock from "../mocks/login-api-mock";
import MemoryStorage from "@/adapters/memory-storage";

describe("For LoginUser Service", () => {
  it("validation is wrong when a bad user/password is passed", async () => {
    const implementation = {
      getUser: jest.fn(() => new ResponseApi(undefined, ""))
    };
    const api = new (LoginApiMock(implementation))();
    const memoryStorage = new MemoryStorage();
    const login: LoginUser = new LoginUser(store, api, memoryStorage);

    expect(await login.validate("lololololo", "lalalalalalal")).toBeFalsy();
    expect(store.state.user).toBe(undefined);
  });

  it("validation is ok when a valid user/password is passed", async () => {
    const user = new User(1, "Joel", "joel.coll@gmail.com", "123456");
    const json = JSON.stringify(user);
    const token = btoa(json);

    const implementation = {
      getUser: jest.fn(() => new ResponseApi(user, token))
    };
    const api = new (LoginApiMock(implementation))();
    const memoryStorage = new MemoryStorage();
    const login: LoginUser = new LoginUser(store, api, memoryStorage);

    expect(await login.validate(user.username, user.password)).toBeTruthy();
    expect(store.state.user).toEqual(user);
  });
});
