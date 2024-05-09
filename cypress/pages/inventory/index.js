import { elements } from "./elements"

class Inventory {

    validarAcessoPagina() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('Acesso a pagina de inventario')
    }

    adicionarProduto(itemName) {
        cy.get(elements.addToCart(itemName)).click()
    }

    removerProduto(itemName) {
        cy.get(elements.removeFromCart(itemName)).click()
    }
}

export default new Inventory()