import { elements } from "./elements"

class Header {

    navegarParaCarrinho() {
        cy.get(elements.cartContainer).click()
    }

    validarCarrinhoPossuiItens(quantidade) {
        cy.get(elements.cartBadge).should('be.visible').and('have.text', quantidade.toString())
    }

    validarCarrinhoNaoPossuiItens() {
        cy.get(elements.cartBadge).should('not.exist')
        cy.screenshot('produto removido')
    }
}

export default new Header()