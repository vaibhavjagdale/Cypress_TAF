/// <reference types="Cypress" />

let registartionPage = require('../pageObject/RegistrationPage.')

describe('My First Test', function() {


  it('test', function() {

    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    const nameField = cy.get(`form input[name='name']`)
    nameField.clear().type('vaibhav');
    
    const emailField = cy.get(`input[name='email']`)
    emailField.clear().type('vaibhav@test.com');

    const passwordField = cy.get(`#exampleInputPassword1`)
    passwordField.clear().type('test');

    const checBox = cy.get(`#exampleCheck1`)
    checBox.click();

    const employmentStatusRadio = cy.get(`#inlineRadio1`)
    employmentStatusRadio.click();

    const submitButton = cy.get(`input[value=Submit]`)
    submitButton.click();

    const close = cy.get('.close')
    close.click();

  })
})