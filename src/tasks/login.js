import { t } from 'testcafe'
import LoginPage from '../ui/login'

export default new class LoginTask {
    async login(username, password) {
        await t
            .typeText(LoginPage.input.username, username)
            .typeText(LoginPage.input.password, password)
            .click(LoginPage.button.login)
    }
}
