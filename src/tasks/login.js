import { t } from 'testcafe'
import { LoginPage } from '../ui/login'

export class LoginTask extends LoginPage {

    async login(username, password) {
        await t
            .typeText(this.input.username, username)
            .typeText(this.input.password, password)
            .click(this.button.login)
    }
}
