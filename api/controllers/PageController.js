/**
 * PageControlelrController
 *
 * @description :: Server-side logic for managing Pagecontrolelrs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var path = require('path');

module.exports = {
	
	showHomePage: function(req,res){		
		if(req.param('q')){
			File.find().where({
        	or: [{
        		tags: req.param('q'),
        	},

      		{  albumId: req.param('q')},
      		{ userId: req.param('q')},
      		{ userName: req.param('q')},]

    }).exec(function(err, files){
				if(err) res.negotiate(err);
				//console.log('aggag', files[0]);	  
		    	//console.log();
				return res.view('static/gallery', {
					user: req.user,
					files: files
				});
			});
		} else{
			File.find().where().exec(function(err, files){
				if(err) res.negotiate(err);
				//console.log('aggag', files[0]);	  
		    	//console.log();
				return res.view('static/gallery', {
					user: req.user,
					files: files
				});
			});
		}
	},

	showUploadFile: function(req,res){
		Album.find().where().exec(function(err, albums){
			if(err) res.negotiate(err);
			return res.view('static/uploadFile', {
				user: req.user,
				albums: albums
			});
		});
	},

	showProfilePage: function(req,res){
		return res.view('static/profile', {
			user: req.user,
		});
	},

	showAlbumsPage: function(req,res){
		Album.find().where().exec(function(err, albums){
			if(err) res.negotiate(err);
			File.find().where().exec(function(err, files){
				if(err) res.negotiate(err);
				return res.view('static/albums', {
					user: req.user,
					files: files,
					albums: albums
				});
			});
		});
	},
	showGalleryPage: function(req,res){
		if(req.param('q')){
			File.find().where({
        	or: [{
        		tags: req.param('q'),
        	},

      		{  albumId: req.param('q')},
      		{ userId: req.param('q')},
      		{ userName: req.param('q')},]

    }).exec(function(err, files){
				if(err) res.negotiate(err);
				//console.log('aggag', files[0]);	  
		    	//console.log();
				return res.view('static/gallery', {
					user: req.user,
					files: files
				});
			});
		} else{
			File.find().where().exec(function(err, files){
				if(err) res.negotiate(err);
				//console.log('aggag', files[0]);	  
		    	//console.log();
				return res.view('static/gallery', {
					user: req.user,
					files: files
				});
			});
		}
	},

	showEditPicture: function(req,res){
		Album.find().where().exec(function(err, albums){
			if(err) res.negotiate(err);
			File.find({id: req.param('id')}).where().exec(function(err, file){
				if(err) res.negotiate(err);
				return res.view('static/editImage', {
					user: req.user,
					file: file,
					albums: albums
				});
			});
		});
	},

	/*showAdminPage: function(req,res){

		User.find().where().exec(function(err, users){
			if(err) res.negotiate(err);

			return res.view('static/admin', {
				users: users
			});

		});
	},*/

	getUsers: function(req,res){
		User.find().where().exec(function(err, users){
			return res.json({
				users: users
			});
		});

	}
	

};

