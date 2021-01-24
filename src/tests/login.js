import LoginTask from '../tasks/login'
import LoginQuestion from '../questions/login'
import SecureQuestion from '../questions/secure'
import faker from 'faker'
import ENV from '../../environment'

fixture
    .meta({ TestSuite: 'smoke-test'})    
    `Classic login testcases`
    .page`${ENV.BASE_URL}`

test
    .meta({
        SEVERITY: 'critical'
    })
    ('Login attemp with invalid username', async t => { 
    await LoginTask.login(faker.name.firstName(), ENV.USER_PASSWORD) 
    await LoginQuestion.errorMessage('username')
})

test    
    .meta({
        SEVERITY: 'critical'
    })('Login attemp with invalid password', async t => {
    await LoginTask.login(ENV.USER_NAME, faker.internet.password()) 
    await LoginQuestion.errorMessage('password')
})

test
    .meta({
        SEVERITY: 'blocker'
    })('Login succes with valid credentials', async t => {
    await LoginTask.login(ENV.USER_NAME, ENV.USER_PASSWORD)
    await SecureQuestion.loginSucess()
})