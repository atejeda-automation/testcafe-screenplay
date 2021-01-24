import { Selector } from 'testcafe'

export default new class LoginPage {
    constructor() {
        this.input = {
            username: Selector('#username'),
            password: Selector('#password')
        }

        this.button = {
            login: Selector('button').withAttribute('type', 'submit')
        }

        this.div = {
            messageError: Selector('#flash')
        }
    }
}
