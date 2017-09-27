/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	updateUser: function(req, res){
			User.update({id: req.param('id')}, {
				username: req.param('username'),
				email: req.param('email'),
				firstName: req.param('firstName'),
				lastName: req.param('lastName')
			})
			.exec(function afterwards(err,updated){
				if (err) {
					res.json(err);
				} else {
					return res.redirect('/profile');
				}
			});
	},

};