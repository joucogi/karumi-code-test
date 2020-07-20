import LoginApi from "@/contracts/login-api";
import User from "@/models/user";
import users from "../../data/users";

export default class FakeLoginApi implements LoginApi {
  getUser(username: string, password: string): Promise<User | undefined> {
    return new Promise<User>(res => {
      setTimeout(() => {
        const user: User | undefined = this.findUser(username, password);
        res(user);
      }, 2000);
    });
  }

  private findUser(username: string, password: string): User | undefined {
    return users
      .map(user => new User(user.id, user.name, user.username, user.password))
      .find(user => user.username === username && user.password === password);
  }
}
