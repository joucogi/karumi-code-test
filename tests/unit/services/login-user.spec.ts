import LoginUser from "@/services/login-user";

const login: LoginUser = new LoginUser();

describe("For LoginUser Service", () => {
  it("validation is wrong when a bad user/password is passed", () => {
    expect(login.validate("lololololo", "lalalalalalal")).toBeFalsy();
  });

  it("validation is ok when a valid user/password is passed", () => {
    expect(login.validate("joucogi", "123456")).toBeTruthy();
  });
});
