/*

import { faker } from '@faker-js/faker/locale/es'

function createRandomUser() {
  const genero = faker.name.sexType()
  const nombre = faker.name.firstName(genero)
  const apellido = faker.name.lastName()
  const email = faker.helpers.unique(faker.internet.email, [nombre, apellido])
  const edad = faker.datatype.number({ min: 18, max: 90 })
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.avatar(),
    edad,
    fechaNacimiento: faker.date.birthdate({
      min: edad,
      max: edad,
      mode: 'age'
    }),
    email,
    nombre,
    apellido,
    genero: genero === 'female' ? 'F' : 'N',
  }
}

export const usuarios = [...Array(100).keys()].map(
  ...createRandomUser
)
*/