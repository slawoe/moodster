const { MongoClient } = require("mongodb");
let client = null;
let db = null;

async function initDatabase(url, dbName) {
  client = new MongoClient(url, {
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
}

async function closeDatabase() {
  await client.close();
}

async function getCollection(collectionName) {
  if (!db) {
    throw new Error("initialize your database first");
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.closeDatabase = closeDatabase;
exports.getCollection = getCollection;
