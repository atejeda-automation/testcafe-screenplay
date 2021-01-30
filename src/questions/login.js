import { t } from 'testcafe'
import { LoginPage } from '../ui/login'
import Copies from '../helpers/copies'

export class LoginQuestion extends LoginPage {

    async errorMessage(errorTypeMessage) {
        switch (errorTypeMessage) {
            case 'username':
                await t.expect(this.div.messageError.innerText).contains(Copies.login.invalidUsername)    
                break
            case 'password': 
                await t.expect(this.div.messageError.innerText).contains(Copies.login.invalidPassword) 
                break
            default:
                console.log(`Invalid error type message expected: ${errorTypeMessage}`)
                break
        }        
    }
    
}
