/**
* File.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	userId  	: { type: 'integer'},
  	userName	: { type: "string"}, 
  	albumId		: { type: 'integer'},
  	albumName   : { type: "string"},    
    path		: { type: 'string'},
    filename    : { type: 'string'},
    tags		: { type: 'string'}       
  }
};

