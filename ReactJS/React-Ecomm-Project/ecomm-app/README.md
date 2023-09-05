-> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react 

-> > create a .babelrc or babel.config.js file and make this entry:
     {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
     }
-> create jest.config.js and make this entry
export default {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
};

-> npm i jest-environment-jsdom

-> update jest.config.js:
export default {
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
};

-> update the script to run test cases:
"test": "jest src" in package.json file

-> nmp run test