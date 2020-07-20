import ResponseApi from "@/models/response-api";
import User from "@/models/user";

export default interface LoginApi {
  getUser(username: string, password: string): Promise<ResponseApi>;
  getUserByToken(token: string): Promise<User>;
}
