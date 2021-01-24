import dotenv from 'dotenv'
dotenv.config()

/**
 * Si no existe un archivo .env,
 * o de existir, no existen variables definidas
 * se tomarán valores por defecto declarados a continuación.  
 */

 export default {
    BASE_URL: process.env.BASE_URL || "https://the-internet.herokuapp.com/login",
    USER_NAME: process.env.USER_NAME || "tomsmith",
    USER_PASSWORD: process.env.USER_PASSWORD || "SuperSecretPassword!"
}
