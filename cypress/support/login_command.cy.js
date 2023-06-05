import log_in from "./log_init.cy.js";

Cypress.Commands.add("login", (email, password) => {
  const log_main = new log_in();
  log_main.inputUsername(email);
  log_main.inputPassword(password);
  log_main.clickLogin();
  log_main.verifyDashboard();
  log_main.verifyUrl();
})
