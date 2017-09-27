/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var path = require('path');
module.exports = {

	upload: function  (req, res) {
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});						
			//	Call to /upload via GET is error
		
		var uploadFile = req.file('uploadFile');
		//console.log(uploadFile);

	    uploadFile.upload({ dirname: '../../assets/images'},function onUploadComplete (err, files) {				
	    
	    																		
	    	if (err) return res.serverError(err);								
	    	//	IF ERROR Return and send 500 error with error
	    	var outputPath = path.basename(files[0].fd);

	    	Album.findOne({userId: req.user.id}).exec(function(err, album) {
				if (err) {
					res.json(err);
				}else if(req.param('albumid')==null){
					albumid=album.id;
					albumname=album.name;
				}else {
					albumid= req.param('albumid');
				}
		    	File.create({
		    		albumId: albumid,
		    		userId: req.user.id,
		    		userName: req.user.username,
		    		path: outputPath,
		    		tags: req.param('tags')
		    		 		
		    	}, function(err, File){
					if(err){
						console.log(JSON.stringify(err));
						res.negotiate(err);
					} else{ 
						return res.redirect('/');	 					
					}
				});
	    	});
	    	
	    });
	},

	updateImage: function (req, res){
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});
		File.update({id: req.param('id')}, {
				tags: req.param('tags'),
				albumId: req.param('albumid'),
				userName: req.user.username
			})
			.exec(function afterwards(err,updated){
				if (err) {
					res.json(err);
				} else {
					return res.redirect('/albums');
				}
			});
	}

};

