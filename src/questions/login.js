import { t } from 'testcafe'
import LoginPage from '../ui/login'
import Copies from '../helpers/copies'

export default new class LoginQuestion {

    async errorMessage(errorTypeMessage) {
        switch (errorTypeMessage) {
            case 'username':
                await t.expect(LoginPage.div.messageError.innerText).contains(Copies.login.invalidUsername)    
                break
            case 'password': 
                await t.expect(LoginPage.div.messageError.innerText).contains(Copies.login.invalidPassword) 
                break
            default:
                console.log(`Invalid error type message expected: ${errorTypeMessage}`)
                break
        }        
    }
    
}
