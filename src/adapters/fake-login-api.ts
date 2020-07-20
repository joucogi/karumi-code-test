import LoginApi from "@/contracts/login-api";
import ResponseApi from "@/models/response-api";
import User from "@/models/user";
import Server from "../../backend/server";

export default class FakeLoginApi implements LoginApi {
  private server: Server;
  constructor(server: Server) {
    this.server = server;
  }

  async getUser(username: string, password: string): Promise<ResponseApi> {
    const json: string = await this.server.findUser(username, password);
    const response = JSON.parse(json);
    const userInfo = response._user;
    const token = response._token;

    if (token === "") {
      return new ResponseApi(undefined, token);
    }

    return new ResponseApi(
      new User(
        userInfo._id,
        userInfo._name,
        userInfo._username,
        userInfo._password
      ),
      token
    );
  }
}
