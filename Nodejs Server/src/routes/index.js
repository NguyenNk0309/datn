const sideRouter = require('./side.route')
const userRouter = require('./user.route')

function route(app) {
	app.use('/user', userRouter)
	app.use('/', sideRouter)
}

module.exports = route
