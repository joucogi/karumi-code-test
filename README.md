# Karumi Test Proposal
Application which users will be able to log in and they will keep persisted until logout button was clicked.

## Screenshots
![Login View](/screenshots/LoginView.png?raw=true "Login View") ![Home View](/screenshots/HomeView.png?raw=true "Home View")

## How to use
### Needed tools
1. [Install yarn](https://classic.yarnpkg.com/en/docs/install)
2. Clone this project: `git clone https://github.com/joucogi/karumi-code-test.git`
3. Move to the project folder: `cd karumi-code-test`

### Application run
1. Install dependencies `yarn install`
2. Compiles and hot-reloads for development `yarn serve`
3. When the server is started you will be able to visit:
- [HomeView](http://127.0.0.1:8080).
- [LoginView](http://127.0.0.1:8080/login).

### Deploy to production
1. Compiles and minifies for production with `yarn build` to generate a `/dist` folder
2. `/dist` folder will be prepared to be run with any http server

### Run tests
#### Run your unit and snapshot tests
```
yarn test:unit
```

#### Update your Snapshots tests
```
yarn test:unit -u
```
When there are updates in views it is necessary to run this command to generate all snapshots.

#### Run your end-to-end tests
```
yarn test:e2e
```

#### Lints and fixes files
```
yarn lint
```