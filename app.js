const fastify = require('./server.js')
const routes = require('./routes')

routes.forEach((route, index) => {
	fastify.route(route)
})

fastify.register(require('fastify-cors'))

const start = async () => {
	try {
		await fastify.listen(8081, '0.0.0.0')
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
