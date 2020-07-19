import LoginUser from "@/services/login-user";
import store from "@/store";
import User from "@/models/user";

const login: LoginUser = new LoginUser(store);

describe("For LoginUser Service", () => {
  it("validation is wrong when a bad user/password is passed", () => {
    expect(login.validate("lololololo", "lalalalalalal")).toBeFalsy();
    expect(store.state.user).toBe(undefined);
  });

  it("validation is ok when a valid user/password is passed", () => {
    const user = new User("Joel", "joel", "123456");
    expect(login.validate(user.username, user.password)).toBeTruthy();
    expect(store.state.user).toEqual(user);
  });
});
