const mongoose = require('mongoose')

async function connect() {
	try {
		mongoose.set('strictQuery', false)
		await mongoose.connect(process.env.URL, { useNewUrlParser: true })
		console.log('Connect DB Success')
	} catch (error) {
		console.log('Connect DB Fail')
	}
}

module.exports = { connect }
