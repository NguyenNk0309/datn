const User = require('../models/users.model')
const { createToken, checkToken } = require('../utils/token')
const { mongooseToObject } = require('../utils/toObject')

class UserController {
	// [GET] /user
	async index(req, res, next) {
		res.json({ error: 'wrong path' })
	}

	// [POST] /user/signIn
	async signIn(req, res, next) {
		const user = { ...req.body }
		User.findOne({ account: user.account, password: user.password }, function (err, data) {
			if (data) {
				const obj = mongooseToObject(data)
				const token = createToken({
					id: obj._id,
					account: obj.account,
					name: obj.name,
				})

				res.json({ status: 'success', message: 'Sign In Success', token: token })
			} else {
				res.json({ status: 'error', message: 'Account Or Password Is Incorrect', token: null })
			}
		})
	}

	// [GET] /user/checkSignIn
	async checkSignIn(req, res, next) {
		const token = req.headers.authorization
		if (token) {
			req.token = token.replace('Bearer ', '')
			try {
				const tokenData = checkToken(req.token)
				if (tokenData) {
					res.status(200).json({ status: 'success', message: 'Authorized' })
				}
			} catch (err) {
				res.status(401).json({ status: 'error', message: 'Unauthorized' })
			}
		}
	}

	// [POST] /user/create
	async createUser(req, res, next) {
		res.status(200).json({ imgs: req.body.userImgs })
	}
}

module.exports = new UserController()
