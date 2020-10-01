const { Router } = require("express");
const router = Router();

const {
  readUsers,
  readUser,
  writeUser,
  updateUser,
} = require("../models/users");

router.get("/", async (request, response) => {
  try {
    const userName = request.query.userName;
    const users = await readUsers(userName);
    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Users not found`);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const user = await readUser(id);
    response.status(200).json(user);
  } catch (error) {
    console.log(error);
    response.status(404).send(`User not found`);
  }
});

router.post("/", async (request, response) => {
  const {
    firstName,
    lastName,
    nickName,
    birthDay,
    userName,
    password,
    passwordRepeat,
    moodstername,
  } = request.body;
  try {
    console.log("POST in /api/users");
    const user = await writeUser(
      firstName,
      lastName,
      nickName,
      birthDay,
      userName,
      password,
      passwordRepeat,
      moodstername
    );
    response.status(201).send(user);
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
      nickName,
      birthDay,
      moodstername,
    } = request.body;
    const result = await updateUser(
      id,
      firstName,
      lastName,
      nickName,
      birthDay,
      moodstername
    );
    return response.json(result);
  } catch (error) {
    console.error("Something went wrong 😑", error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
