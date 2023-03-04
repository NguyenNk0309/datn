class SideController {
	// [GET] /
	async index(req, res, next) {
		res.send('index route')
	}
}

module.exports = new SideController()
