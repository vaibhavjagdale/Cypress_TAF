/// <reference types="Cypress" />

class Registartion {
    

  async enterName() {
    nameField = cy.get(`form input[name='name']`);
    await nameField.clear().type("vaibhav");
    return this;
  }

  async enterEmail() {
    emailField = cy.get(`input[name='email']`);
    return emailField.clear().type("vaibhav@test.com");
  }
  async enterPassword() {
    passwordField = cy.get(`#exampleInputPassword1`);
    return passwordField.clear().type("test");
  }
  async selectheckBox() {
    chekBox = cy.get(`#exampleCheck1`);
    return chekBox.click();
  }
  async selectemploymentStatus() {
    employmentStatusRadio = cy.get(`#inlineRadio1`);
    return employmentStatusRadio.click();
  }

  async Submit() {
        submitButton = cy.get(`input[value=Submit]`);
    return submitButton.click();

  }

  async close() {
    
    closeButton = cy.get('.close');
    return closeButton.click();
  }
}

module.exports = new Registartion();