# Karumi Test Proposal
<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/VueJS-%5E2.6.11-brightgreen" alt="VueJS"/></a>
<a href="https://vuejs.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-%5E3.9.7-blue" alt="TypeScript"/></a>
<a href="https://github.com/joucogi/karumi-code-test/actions"><img src="https://github.com/CodelyTV/php-ddd-example/workflows/CI/badge.svg" alt="CI pipeline status" /></a>

Application which users will be able to log in and they will keep persisted until logout button was clicked.

## Contents

* [Screenshots](#screenshots)
* [How to use](#how-to-use)
    * [Needed tools](#needed-tools)
    * [Application run](#application-run)
    * [Application run in Netlify](#application-run-in-netlify)
    * [Deploy to production](#deploy-to-production)
* [Testing](#testing)
    * [Testing the application](#testing-the-application)
    * [Lint and fixes files](#lints-and-fixes-files)
* [Languages, libraries and frameworks](#languages-libraries-and-frameworks-used)
* [Folders structure](#folders-structure)

## Screenshots
![Login View](/screenshots/LoginView.png?raw=true "Login View") ![Home View](/screenshots/HomeView.png?raw=true "Home View")

## How to use
### Needed tools
1. <a href="https://classic.yarnpkg.com/en/docs/install" target="_blank">Install yarn</a>
2. Clone this project: `git clone https://github.com/joucogi/karumi-code-test.git`
3. Move to the project folder: `cd karumi-code-test`

### Application run
There are two ways to run the application in your own computer or server:

1. Deploying `dist` folder
    > You can deploy `dist` folder to your web server
    >
    > or
    >
    > 1. Install <a href="https://www.npmjs.com/package/serve" target="_blank">serve</a> (`yarn global add serve`)
    > 2. Run serve as a SPA `serve -l 8080 -s ./dist`

2. Run develop server
    > 1. Install dependencies `yarn install`
    > 2. Compiles and hot-reloads for development `yarn serve`

At this point, you should be able to access to the next two views: 
> - <a href="http://127.0.0.1:8080" target="_blank">HomeView</a>
> - <a href="http://127.0.0.1:8080/login" target="_blank">LoginView</a>

### Application run in Netlify
If you prefer you can visit the application deployed in **<a href="https://www.netlify.com" target="_blank">Netlify</a>**
> - <a href="https://joucogi-karumi-login-only-for-guests.netlify.app" target="_blank">HomeView</a>
> - <a href="https://joucogi-karumi-login-only-for-guests.netlify.app/login" target="_blank">LoginView</a>

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

## Languages, libraries and frameworks used
1. For application
    > - <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> used in most of the project
    > - <a href="https://vuejs.org/" target="_blank">VueJS</a> to make the user interfaces.
    > - <a href="https://yarnpkg.com/" target="_blank">Yarn</a> as a package repository.

2. For tests
    > - <a href="https://jestjs.io/" target="_blank">Jest</a> and <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> for unit and integration tests.
    > - <a href="https://www.cypress.io/" target="_blank">Cypress</a> and <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">Javascript</a> for e2e tests.
   
## Folders structure

Folders more relevance:

- `src`: Folder where all the application code is located.
- `test`: Folder where all the tests are located.
- `dist`: Folder where builded application is located.

```
.
├── backend  
├── dist
├── public
├── screenshots
├── src
│   ├── adapters
│   ├── assets
│   ├── components
│   ├── contracts
│   ├── middlewares
│   ├── models
│   ├── router
│   ├── services
│   ├── store
│   └── views
└── tests
    ├── e2e
    └── unit
```