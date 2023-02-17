import express from 'express'
import { faker } from '@faker-js/faker/locale/es'
import { min } from 'date-fns'

const app = express()
const port = 8080
app.listen(port, () => console.log(`Express listening on port: ${port}`))

app.get('/:unParametro', (req, res) => {
  const { unParametro } = req.params
  res.send(`se recibio el parametro: ${unParametro}`)
})

app.get('/bienvenida', (req, res) => {
  res.send(`<body> 
  <p  style="color:blue">Bienvenido</p>
  </body>`)
})

app.get('/user', (req, res) => {
  const nombre = faker.name.firstName()
  const apellido = faker.name.lastName()
  res.send({
    nombre,
    apellido,
    edad: faker.datatype.number({ min: 18, max: 90 }),
    correo: faker.helpers.unique(faker.internet.email, [nombre, apellido])
  })
})