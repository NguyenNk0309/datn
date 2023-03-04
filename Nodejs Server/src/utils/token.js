var jwt = require('jsonwebtoken')

function createToken(data) {
	return jwt.sign(data, process.env.SECRET_KEY)
}

function checkToken(token) {
	return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = { createToken, checkToken }
