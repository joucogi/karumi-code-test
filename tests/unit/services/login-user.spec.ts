import store from "@/store";
import User from "@/models/user";
import MemoryStorage from "@/adapters/memory-storage";
import { getLoginUser } from "../helpers";

describe("For LoginUser Service", () => {
  it("When wrong credentials are passed validation is wrong and token and user in store don't exist", async () => {
    const memoryStorage = new MemoryStorage();
    const login = getLoginUser(undefined, "", memoryStorage);

    expect(await login.validate("lololololo", "lalalalalalal")).toBeFalsy();
    expect(store.state.user).toBe(undefined);
    expect(memoryStorage.getItem("token")).toBe(null);
  });

  it("When valid credentials are passed validation is ok and token and user in store exists", async () => {
    const user = new User(1, "Joel", "joel.coll@gmail.com", "123456");
    const json = JSON.stringify(user);
    const token = btoa(json);
    const memoryStorage = new MemoryStorage();

    const login = getLoginUser(user, token, memoryStorage);

    expect(await login.validate(user.username, user.password)).toBeTruthy();
    expect(store.state.user).toEqual(user);
    expect(memoryStorage.getItem("token")).toBe(token);
  });

  it("When token exists in storage and logout is called token is removed", async () => {
    const user = new User(1, "Joel", "joel.coll@gmail.com", "123456");
    const json = JSON.stringify(user);
    const token = btoa(json);
    const memoryStorage = new MemoryStorage();
    const login = getLoginUser(user, token, memoryStorage);

    await login.validate(user.username, user.password);

    expect(memoryStorage.getItem("token")).toBe(token);
    expect(store.state.user).toEqual(user);
    login.logout();
    expect(memoryStorage.getItem("token")).toBe(null);
    expect(store.state.user).toEqual(undefined);
  });
});
