/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')

const styles = require('./src/customStyles')
const customUser = require('./src/customUser')

const swaggerOptions = {
  customCss: styles.getCustomStyle()
}

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', basicAuth({
  users: customUser.getCredentials(),
  challenge: true,
}),swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
})

/* Endpoints */
require('./src/endpoints')(app)
