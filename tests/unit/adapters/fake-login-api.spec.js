import User from "@/models/user";
import FakeLoginApi from "@/adapters/fake-login-api";
import users from "../../../data/users";

const api = new FakeLoginApi();

describe("For FakeLoginApi Service", () => {
  it("return undefined if username and password are not valids", async () => {
    expect(await api.getUser("lololololo", "lalalalalalal")).toBe(undefined);
  });

  it("return undefined if username and password are not valids", async () => {
    const userData = users[0];
    const user = new User(
      userData.id,
      userData.name,
      userData.username,
      userData.password
    );
    expect(await api.getUser(userData.username, userData.password)).toEqual(
      user
    );
  });
});
