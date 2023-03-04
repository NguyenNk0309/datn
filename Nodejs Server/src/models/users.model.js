const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema(
	{
		_id: {
			type: Number,
		},

		account: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},

		name: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false, // You should be aware of the outcome after set to false
		timestamps: true,
		_id: false,
	}
)

module.exports = mongoose.model('User', User)
