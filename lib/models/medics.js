const { getCollection } = require("../database");
const { ObjectID } = require("mongodb");

async function readMedics(userID) {
  const medicsCollection = await getCollection("medics");
  const sorting = { name: 1 };
  const medics = await medicsCollection
    .find({ userID })
    .sort(sorting)
    .toArray();
  if (!medics) {
    return null;
  }
  return medics;
}

async function readMedic(id) {
  const medicsCollection = await getCollection("medics");
  const objectId = new ObjectID.createFromHexString(id);
  const medic = await medicsCollection.findOne({ _id: objectId });
  if (!medic) {
    return null;
  }
  return medic;
}

async function writeMedic(
  name,
  intakeMorning,
  intakeMidday,
  intakeEvening,
  intakeNight,
  userID
) {
  const medicsCollection = await getCollection("medics");
  const newMedic = await medicsCollection.insertOne({
    name,
    intakeMorning,
    intakeMidday,
    intakeEvening,
    intakeNight,
    userID,
  });
  if (!newMedic) {
    return null;
  }
  return newMedic;
}

async function updateMedic(
  id,
  name,
  intakeMorning,
  intakeMidday,
  intakeEvening,
  intakeNight
) {
  const medicsCollection = await getCollection("medics");
  const objectId = new ObjectID.createFromHexString(id);
  const updatedMedic = await medicsCollection.updateOne(
    { _id: objectId },
    {
      $set: {
        name,
        intakeMorning,
        intakeMidday,
        intakeEvening,
        intakeNight,
      },
    }
  );
  if (!updatedMedic) {
    throw new Error("Medic does not exist");
  }
  return updatedMedic;
}

async function deleteMedic(id) {
  const medicsCollection = await getCollection("medics");
  const objectId = new ObjectID.createFromHexString(id);
  const deletedMedic = await medicsCollection.deleteOne({ _id: objectId });
  if (!deletedMedic) {
    throw new Error("Medic does not exist");
  }
  return deletedMedic;
}

exports.writeMedic = writeMedic;
exports.readMedics = readMedics;
exports.readMedic = readMedic;
exports.updateMedic = updateMedic;
exports.deleteMedic = deleteMedic;
