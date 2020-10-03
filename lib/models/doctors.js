const { getCollection } = require("../database");
const { ObjectID } = require("mongodb");

async function readDoctors(userID) {
  const doctorsCollection = await getCollection("doctors");
  const sorting = { lastName: 1 };
  const doctors = await doctorsCollection
    .find({ userID })
    .sort(sorting)
    .toArray();
  if (!doctors) {
    return null;
  }
  return doctors;
}

async function readDoctor(id) {
  const doctorsCollection = await getCollection("doctors");
  const objectId = new ObjectID.createFromHexString(id);

  const doctor = await doctorsCollection.findOne({ _id: objectId });

  if (!doctor) {
    return null;
  }
  return doctor;
}

async function writeDoctor(
  firstName,
  lastName,
  street,
  zipAndLocation,
  phone,
  mail,
  officeHours,
  userID
) {
  const doctorsCollection = await getCollection("doctors");
  const newDoctor = await doctorsCollection.insertOne({
    firstName,
    lastName,
    street,
    zipAndLocation,
    phone,
    mail,
    officeHours,
    userID,
  });
  if (!newDoctor) {
    throw new Error("Nothing to post");
  }
  return newDoctor;
}

async function updateDoctor(
  id,
  firstName,
  lastName,
  street,
  zipAndLocation,
  phone,
  mail,
  officeHours
) {
  const doctorsCollection = await getCollection("doctors");
  const objectId = new ObjectID.createFromHexString(id);
  const updatedDoctor = await doctorsCollection.updateOne(
    { _id: objectId },
    {
      $set: {
        firstName,
        lastName,
        street,
        zipAndLocation,
        phone,
        mail,
        officeHours,
      },
    }
  );
  if (!updatedDoctor) {
    throw new Error("Doctor does not exist");
  }
  return updatedDoctor;
}

async function deleteDoctor(id) {
  const doctorsCollection = await getCollection("doctors");
  const objectId = new ObjectID.createFromHexString(id);
  const deletedDoctor = await doctorsCollection.deleteOne({ _id: objectId });
  if (!deletedDoctor) {
    throw new Error("Doctor does not exist");
  }
  return deletedDoctor;
}

exports.writeDoctor = writeDoctor;
exports.readDoctors = readDoctors;
exports.readDoctor = readDoctor;
exports.updateDoctor = updateDoctor;
exports.deleteDoctor = deleteDoctor;
