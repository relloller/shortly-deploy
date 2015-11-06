var mongoose = require('mongoose');

mongoose.connect('mongodb://MongoLab-8:md9AgpT6tkgAFf2FX6ZnFXmZJhz523WIsg6kW8xGruU-@ds048878.mongolab.com:48878/MongoLab-8');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongodb connection is open');
});

module.exports = db;
//