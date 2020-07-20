import users from './data/users';
import User from "../src/models/user";
import ResponseApi from "@/models/response-api";

export default class Server {
    findUser(username: string, password: string): Promise<string> {
        return new Promise<string>(res => {
            setTimeout(() => {
                const user: User | undefined = users
                    .map(user => new User(user.id, user.name, user.username, user.password))
                    .find(user => user.username === username && user.password === password);
                const token = this.generateToken(user);
                const response: ResponseApi = new ResponseApi(user, token);
                res(JSON.stringify(response));
            }, 2000);
        });
    }

    private generateToken(user: User | undefined): string {
        let token = "";
        if (user !== undefined) {
            const json: string = JSON.stringify(user);
            token = btoa(json);
        }

        return token;
    }
}