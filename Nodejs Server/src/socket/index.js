const { Server } = require('socket.io')

function initSocket(server) {
	const io = new Server(server)

	io.on('connection', (socket) => {
		console.log('a user connected')
		socket.on('disconnect', () => {
			console.log('user disconnected')
		})

		// New Sockets Here
	})
}

module.exports = initSocket
