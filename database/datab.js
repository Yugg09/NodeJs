

//import data from frontend to database

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://admin123:admin123@coding.ecenr8i.mongodb.net/";
const client = new MongoClient(url);
//@==%40 

// Database Name
const dbName = 'coderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
  //find all documents
//   const findResult =  await collection.find({});//cursor funcn(point karna)
//   //console.log('Found documents =>', findResult);

//   let balance = 0;

//   for await (const doc of findResult){
//     console.log(doc);//one at a time data
//     balance++;
//   }


//how to add data
// const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// console.log('Inserted documents =>', insertResult);

//filter data
const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());