const { Router } = require("express");
const router = Router();

const {
  readMedics,
  writeMedic,
  readMedic,
  updateMedic,
  deleteMedic,
} = require("../models/medics");

router.get("/", async (request, response) => {
  try {
    const userID = request.query.userID;
    const medic = await readMedics(userID);
    response.status(200).json(medic);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Medics not found`);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const medic = await readMedic(id);
    response.status(200).json(medic);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Medic not found`);
  }
});

router.post("/", async (request, response) => {
  const {
    name,
    intakeMorning,
    intakeMidday,
    intakeEvening,
    intakeNight,
    userID,
  } = request.body;
  try {
    console.log("POST in /api/medic");
    const newMedic = await writeMedic(
      name,
      intakeMorning,
      intakeMidday,
      intakeEvening,
      intakeNight,
      userID
    );
    response.status(201).send(newMedic);
  } catch (error) {
    console.error("Something went wrong 😑", error);
    response.status(500).send(error.message);
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const {
      name,
      intakeMorning,
      intakeMidday,
      intakeEvening,
      intakeNight,
    } = request.body;
    const result = await updateMedic(
      id,
      name,
      intakeMorning,
      intakeMidday,
      intakeEvening,
      intakeNight
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
    const medic = await readMedic(id);
    if (!medic) {
      response.status(404).send("Medic doesn't exists");
      return;
    }
    await deleteMedic(id);
    response.status(200).send("Deleted");
  } catch (error) {
    console.error(error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
