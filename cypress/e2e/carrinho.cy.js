import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"


describe('Carrinho', () => {

    beforeEach(() => {
        // Arrange
        Login.visitarPagina()
        Login.prencherCredenciaisValidas()
    })

    it('Adicionar produto ao carrinho com sucesso', () => {

        // Action
        Inventory.adicionarProduto('Sauce Labs Backpack')

        // Assert
        Header.validarCarrinhoPossuiItens(1)
        Header.navegarParaCarrinho()

        Cart.validarProdutoPresenteCarrinho('Sauce Labs Backpack')
    })

    it('Remover produto do carrinho com sucesso', () => {

        // Arrange
        Inventory.adicionarProduto('Sauce Labs Backpack')

        // Action
        Inventory.removerProduto('Sauce Labs Backpack')
        // Assert
        Header.validarCarrinhoNaoPossuiItens()
    })
})