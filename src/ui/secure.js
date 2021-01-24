import { Selector } from 'testcafe'

export default new class SecurePage {
    constructor() {
        this.div = {
            message: Selector('#flash')
        }
    }
}
