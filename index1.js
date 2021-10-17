const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net';

// Database Name
const dbName = '__CONCOX__';


// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
    client.close();
  });  
});


function findDocuments(db, callback) {
  // Get the documents collection
  const collection = db.collection( 'devices' );
  const collection1 = db.collection( 'status' );
  // Find some documents
  collection
    .find().limit(30)
    .toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
     for(let i=0;i<3;i++){
        let v= docs[i].imei
        console.log(v)
        collection1.find({"docs.imei":'v"}).limit(3).toArray(function(err, docs1){  assert.equal(err, null);
    console.log(docs1)})}
      callback(docs);

    });
    
}