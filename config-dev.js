const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, './.env.dev') })

const e2e = {
    env: {
        baseUrl: process.env.BASE_URL,
        username: process.env.USER,
        password: process.env.USER_PASSWORD
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})
