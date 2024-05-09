import Login from '../pages/login'
import Inventory from '../pages/inventory'

describe('Login', () => {

    beforeEach(() => {
        // Arrange
        Login.visitarPagina()

    })

    it('Realizar login com sucesso', () => {

        // Action
        Login.prencherCredenciaisValidas()

        // Assert
        Inventory.validarAcessoPagina()

    })

    it('Realizar login informado credenciais inválidas', () => {

        // Action
        Login.prencherCredenciaisInvalidas()

        // Assert
        Login.validarErroCredenciaisInvalidas()
    })
})