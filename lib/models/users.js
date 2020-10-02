const { getCollection } = require("../database");
const { ObjectID } = require("mongodb");

async function readUsers(userName) {
  const usersCollection = await getCollection("users");
  const users = await usersCollection.findOne({ userName });

  if (!users) {
    return null;
  }
  return users;
}

async function readUser(id) {
  const usersCollection = await getCollection("users");
  const objectId = new ObjectID.createFromHexString(id);
  const user = await usersCollection.findOne({ _id: objectId });
  if (!user) {
    return null;
  }
  return user;
}

async function writeUser(
  firstName,
  lastName,
  nickName,
  birthDay,
  userName,
  password,
  passwordRepeat,
  moodsterName
) {
  const usersCollection = await getCollection("users");
  const existingUser = await usersCollection.findOne({ userName });
  if (existingUser) {
    return null;
  }
  const user = await usersCollection.insertOne({
    firstName,
    lastName,
    nickName,
    birthDay,
    userName,
    password,
    passwordRepeat,
    moodsterName,
  });
  if (!user) {
    return null;
  }
  return user;
}

async function updateUser(
  id,
  firstName,
  lastName,
  nickName,
  birthDay,
  moodsterName
) {
  const usersCollection = await getCollection("users");
  const objectId = new ObjectID.createFromHexString(id);
  const updatedUser = await usersCollection.updateOne(
    { _id: objectId },
    {
      $set: {
        firstName,
        lastName,
        nickName,
        birthDay,
        moodsterName,
      },
    }
  );
  if (!updatedUser) {
    throw new Error("User does not exist");
  }
  return updatedUser;
}

exports.writeUser = writeUser;
exports.readUser = readUser;
exports.readUsers = readUsers;
exports.updateUser = updateUser;
