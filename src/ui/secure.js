import { Selector } from 'testcafe'

export class SecurePage {
    constructor() {
        this.div = {
            message: Selector('#flash')
        }
    }
}
