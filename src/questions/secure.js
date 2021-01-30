import { t } from 'testcafe'
import { SecurePage } from '../ui/secure'
import Copies from '../helpers/copies'

export class SecureQuestions extends SecurePage {
    async loginSucess() {
        await t.expect(this.div.message.innerText).contains(Copies.login.sucessful)
    }
}