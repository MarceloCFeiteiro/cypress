import { elements } from "./elements" 

class Login {
    visitarPagina() {
        cy.log('Aqui')
        cy.log(Cypress.env('baseUrl'))
        console.log(Cypress.env('baseUrl'))
        console.log('Aqui')
        cy.visit(Cypress.env('baseUrl'))
    }

    prencherCredenciaisValidas(){
        cy.get(elements.username).type('standard_user')
        cy.get(elements.password).type('secret_sauce')
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
