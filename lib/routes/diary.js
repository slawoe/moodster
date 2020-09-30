const { Router } = require("express");
const router = Router();

const { readDiary, writeDiaryEntry } = require("../models/diary");

router.get("/", async (request, response) => {
  try {
    const userID = request.query.userID;
    const diary = await readDiary(userID);
    response.status(200).json(diary);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Diary not found`);
  }
});

router.post("/", async (request, response) => {
  const {
    mood,
    dayInOneWord,
    whatWasGood,
    whatCouldBeBetter,
    diaryEntry,
    userID,
    date,
  } = request.body;
  console.log(request.body);
  try {
    console.log("POST in /api/diary");
    const newDiaryEntry = await writeDiaryEntry(
      mood,
      dayInOneWord,
      whatWasGood,
      whatCouldBeBetter,
      diaryEntry,
      userID,
      date
    );
    response.status(201).send(newDiaryEntry);
  } catch (error) {
    console.error("Something went wrong 😑", error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
