const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //config.env.apiUrl = "https://the-internet.herokuapp.com/basic_auth"
    },
  },
});
