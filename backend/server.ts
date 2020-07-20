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

    getUser(token: string): Promise<string> {
        return new Promise<string>(res => {
            setTimeout(() => {
                const user: User | undefined = this.convertToUser(token);
                res(JSON.stringify(user));
            }, 2000);
        });
    }

    private convertToUser(token: string): User | undefined{
        if (token.length){
            const user = atob(token);
            return JSON.parse(user);
        }

        return undefined;
    }

    private generateToken(user: User | undefined): string {
        if (user !== undefined) {
            const json: string = JSON.stringify(user);
            return btoa(json);
        }

        return "";
    }
}