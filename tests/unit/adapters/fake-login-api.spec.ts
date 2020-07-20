import User from "@/models/user";
import ResponseApi from "@/models/response-api";
import users from "../../../backend/data/users";
import { getFakeApiLogin } from "../helpers";

describe("For FakeLoginApi Service", () => {
  it("return ResponseApi with undefined user and empty token if username and password are not valids", async () => {
    const response = new ResponseApi(undefined, "");
    const api = getFakeApiLogin(response);
    expect(await api.getUser("lololololo", "lalalalalalal")).toEqual(response);
  });

  it("return ResponseApi with a valid user and valid token if username and password are not valids", async () => {
    const userData = users[0];
    const user = new User(
      userData.id,
      userData.name,
      userData.username,
      userData.password
    );
    const json = JSON.stringify(user);
    const token = btoa(json);
    const response = new ResponseApi(user, token);

    const api = getFakeApiLogin(response);
    expect(await api.getUser(userData.username, userData.password)).toEqual(
      response
    );
  });
});
