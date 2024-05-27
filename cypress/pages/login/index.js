import { elements } from "./elements" 

class Login {
    visitarPagina() {
        cy.visit(Cypress.env('baseUrl'))
    }

    prencherCredenciaisValidas(){
        cy.get(elements.username).type(Cypress.env('username'))
        cy.get(elements.password).type(Cypress.env('password'))
        cy.get(elements.loginButton).click()
    }

    prencherCredenciaisInvalidas(){
        cy.get(elements.username).type('user_invalid')
        cy.get(elements.password).type('1234')
        cy.get(elements.loginButton).click()
    }

    validarErroCredenciaisInvalidas(){
        cy.log(Cypress.env('baseUrl'))
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get(elements.errorMessage).should('contain.text', 'Username and password do not match any user in this service')
        cy.screenshot('erro credenciais inválidas')
    }

}

export default new Login()
