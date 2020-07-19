export default class LoginUser {
  private username = "joucogi";
  private password = "123456";

  validate(username: string, password: string): boolean {
    return username === this.username && password === this.password;
  }
}
