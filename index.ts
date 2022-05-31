import fastify from 'fastify'
import ExampleController from './controller/ExampleController'

const server = fastify()

const exampleController = ExampleController.getInstance()

server.get('/ping', exampleController.get)



server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})