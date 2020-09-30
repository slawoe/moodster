const { Router } = require("express");
const router = Router();

const {
  readDoctors,
  writeDoctor,
  readDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../models/doctors");

router.get("/", async (request, response) => {
  try {
    const userID = request.query.userID;
    const doctor = await readDoctors(userID);
    response.status(200).json(doctor);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Doctors not found`);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const doctor = await readDoctor(id);
    response.status(200).json(doctor);
  } catch (error) {
    console.log(error);
    response.status(404).send(`User not found`);
  }
});

router.post("/", async (request, response) => {
  const {
    firstName,
    lastName,
    street,
    zipAndLocation,
    phone,
    mail,
    officeHours,
    userID,
  } = request.body;
  try {
    console.log("POST in /api/doctor");
    const newDoctor = await writeDoctor(
      firstName,
      lastName,
      street,
      zipAndLocation,
      phone,
      mail,
      officeHours,
      userID
    );
    response.status(201).send(newDoctor);
  } catch (error) {
    console.error("Something went wrong 😑", error);
    response.status(500).send(error.message);
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const {
      firstName,
      lastName,
      street,
      zipAndLocation,
      phone,
      mail,
      officeHours,
    } = request.body;
    const result = await updateDoctor(
      id,
      firstName,
      lastName,
      street,
      zipAndLocation,
      phone,
      mail,
      officeHours
    );
    return response.json(result);
  } catch (error) {
    console.error("Something went wrong 😑", error);
    response.status(500).send(error.message);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const doctor = await readDoctor(id);
    if (!doctor) {
      response.status(404).send("Doctor doesn't exists");
      return;
    }
    await deleteDoctor(id);
    response.status(200).send("Deleted");
  } catch (error) {
    console.error(error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
