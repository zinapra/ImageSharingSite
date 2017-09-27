/**
 * AlbumController
 *
 * @description :: Server-side logic for managing albums
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	albumCreate: function(req, res){
		Album.create({
	    		userId: req.user.id,
	    		name: req.param('name')	    		
	    	}, function(err, album){
				if(err){
					console.log(JSON.stringify(err));
					res.negotiate(err);
				}else return res.redirect('/upload-file');
		});
	},

	createDefaultAlbum: function(req, res){
		Album.findOne({
			userId: req.user.id,
			name: 'default'
		}).exec(function(err, album) {
			if (err) {
				res.json(err);
			} else if(!album){
				console.log('HUEEEEEEEEEEEEEE', album);
				Album.create({
		    		userId: req.user.id,
		    		name: 'default'	    		
		    	}, function(err, album){
					if(err){
						console.log(JSON.stringify(err));
						res.negotiate(err);
					}				
				});
			}
		});
	},

};

