import { LoginTask } from '../tasks/login'
import { LoginQuestion } from '../questions/login'
import { SecureQuestions } from '../questions/secure'
import faker from 'faker'
import ENV from '../../environment'

const loginTask = new LoginTask()
const loginQuestion = new LoginQuestion()
const secureQuestion = new SecureQuestions()

fixture
    .meta({ TestSuite: 'smoke-test'})    
    `Classic login testcases`
    .page`${ENV.BASE_URL}`

test
    .meta({
        SEVERITY: 'critical'
    })
    ('Login attemp with invalid username', async t => { 
    await loginTask.login(faker.name.firstName(), ENV.USER_PASSWORD) 
    await loginQuestion.errorMessage('username')
})

test    
    .meta({
        SEVERITY: 'critical'
    })('Login attemp with invalid password', async t => {
    await loginTask.login(ENV.USER_NAME, faker.internet.password()) 
    await loginQuestion.errorMessage('password')
})

test
    .meta({
        SEVERITY: 'blocker'
    })('Login succes with valid credentials', async t => {
    await loginTask.login(ENV.USER_NAME, ENV.USER_PASSWORD)
    await secureQuestion.loginSucess()
})