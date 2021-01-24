import { t } from 'testcafe'
import SecurePage from '../ui/secure'
import Copies from '../helpers/copies'

export default new class SecureQuestions {
    async loginSucess() {
        await t.expect(SecurePage.div.message.innerText).contains(Copies.login.sucessful)
    }
}