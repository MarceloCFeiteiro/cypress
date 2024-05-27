const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, './.env.dev') })

const e2e = {
    env: {
        baseUrl: process.env.BASE_URL,
        username: process.env.TEST_USER,
        password: process.env.TEST_USER_PASSWORD
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})
