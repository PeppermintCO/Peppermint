# Peppermint

Peppermint allows developers to easily create functional Vue tests without having to write any code. It dynamically converts user inputs into executable test code by using DOM query selectors provided by the vue-testing-library.

Peppermint is currently under development! We are looking for beta testers. Please open a new issue with details to report a bug.

## How to Use
Download Peppermint at www.peppermint.com. Available for Mac OS. To run tests generated by Peppermint install the following dependencies: jest, jest-serializer-vue, vue-testing-library.
```
npm i -D jest jest-serializer-vue @testing-library/vue
```

In your package.json file, add the following "scripts" key and "jest" key as well as their corresponding values:
```
{
  "name": "peppermint",
  "version": "0.0.1",
  "author": "Peppermint",
  ...
  "scripts": {
    "test": "./node_modules/.bin/jest",
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "snapshotSerializers": [
      "jest-serializer-vue"
    ],
    "transform": {
      "^.+\\.js$": "babel-jest",
      ".*\\.(vue)$": "vue-jest"
    }
  }
```

## How it Works

1. On the initial screen, enter the URL of your project and load your Vue application to start creating tests.
![Landing Page](https://github.com/PeppermintCO/Peppermint/blob/master/assets/images/landing-page.png)
2. Utilize our input fields, drop-down options, and tooltips features to easily create query assertion and event test statements.
![Peppermint with code editor](https://github.com/PeppermintCO/Peppermint/blob/master/assets/images/peppermint-w-code-editor.png)
3. Refer to the browser view of your app displayed on the right panel to quickly identify values for your selectors and use the file directory to open up the code editor to easily refer to your codebase.
![Peppermint with browser](https://github.com/PeppermintCO/Peppermint/blob/master/assets/images/peppermint-w-browser.png)
4. Peppermint will then convert user input into dynamically generated test files that will be saved inside a __tests__ folder. To run tests:
```
npm run test
```

#### To Run Dev Version
1. Clone repo.

2. Install dependencies
```
npm install
```

3. Serve with hot reload at localhost:9080
```
npm run dev
```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
