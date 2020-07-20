# Karumi Test Proposal
Application which users will be able to log in and they will keep persisted until logout button was clicked.

> At this time, users will be able to log in but they will not keep their session when the page is reloaded.
> 
> Home view is just accessible when user is logged, if it is not logged it will be redirect to login view.
>
> The credentials are validated by FakeLoginApi which get the valid users list from ./data/users.ts file.
> 
> FakeLoginApi implements the LoginApi interface and when the API is ready we will only have to do a new implementation. 

## Screenshots
![Login View](/screenshots/LoginView.png?raw=true "Login View") ![Home View](/screenshots/HomeView.png?raw=true "Home View")

## How to use
### Needed tools
1. [Install yarn](https://classic.yarnpkg.com/en/docs/install)
2. Clone this project: `git clone https://github.com/joucogi/karumi-code-test.git`
3. Move to the project folder: `cd karumi-code-test`

### Application run
There are two ways to run the application in your own computer or server:

1. Deploying `dist` folder
    > You can deploy `dist` folder to your web server
    >
    > or
    >
    > 1. Install [serve](https://www.npmjs.com/package/serve) (`yarn global add serve`)
    > 2. Run serve as a SPA `serve -l 8080 -s ./dist`

2. Run develop server
    > 1. Install dependencies `yarn install`
    > 2. Compiles and hot-reloads for development `yarn serve`

At this point, you should be able to access to the next two views: 
> - [HomeView](http://127.0.0.1:8080)
> - [LoginView](http://127.0.0.1:8080/login)

### Application run in Netlify
If you prefer you can visit the application deployed in **[Netlify](https://www.netlify.com)**
> - [HomeView](https://joucogi-karumi-login-with-api.netlify.app) 
> - [LoginView](https://joucogi-karumi-login-with-api.netlify.app/login)

### Deploy to production
The application is all compiled and ready to be deployed into `dist` folder.
You can compile again with the following command `yarn build`.

## Testing
### Testing the application

1. Unit and Snapshot tests
    > These tests will allow us to verify that the different views and components are displayed and working correctly.
    >
    > Command for run unit tests: `yarn test:unit`
    >
    > if it is necessary to regenerate all the snapshots you can do with the following command `yarn test:unit -u`.
    > It will be only necessary when html or css is changed in Vue components.

2. E2E tests
    > These tests will allow us to test the entire application from beginning to end to ensure the application flow behaves as expected and all integrated pieces work together as expected.
    >
    > Command for run e2e tests: `yarn test:e2e`
    >
    > It is possible run tests with user interface by running the following command `yarn test:e2e:ui`

#### Lints and fixes files
The following command (`yarn lint`) is for find and fix problems in TypeScript code.