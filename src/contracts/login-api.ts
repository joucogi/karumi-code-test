import ResponseApi from "@/models/response-api";

export default interface LoginApi {
  getUser(username: string, password: string): Promise<ResponseApi>;
}
