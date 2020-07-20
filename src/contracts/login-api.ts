import User from "@/models/user";

export default interface LoginApi {
  getUser(username: string, password: string): Promise<User | undefined>;
}
