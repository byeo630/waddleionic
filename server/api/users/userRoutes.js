var userController = require('./userController.js');

module.exports = function(app){
  app.post('/userdata', userController.userLogin);
  app.post('/userfoursquarecode', userController.addFoursquareData);
  app.post('/userinstagramcode', userController.addInstagramData);
  app.get('/bucketlist/:user/:page?', userController.getBucketList);
	app.get('/aggregatefeed/:user/:page?', userController.getAggregatedListOfCheckins);
	app.get('/userinfo/:user', userController.getUserInfo)
	//the next line must be listed last because it catches all paths
	app.get('/:friend/:viewer/:page?', userController.getUserData);
};
