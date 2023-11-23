const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://Naman:VChaeFnhnxZ4AeBK@cluster0.mf4jtro.mongodb.net/appointments?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected to MongoDB');
      _db=client.db();
      callback(); // Pass the client to the callback function
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb=()=>{
    if(_db){
        return _db;
    }
    else
    {
        console.log('there is error in database');

    }
};
exports.mongoConnect = mongoConnect;
exports.getDb=getDb;
