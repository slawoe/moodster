const { getCollection } = require("../database");

async function readDiary(userID) {
  const diaryCollection = await getCollection("diary");
  const diary = await diaryCollection.find({ userID }).toArray();
  console.log("read");
  if (!diary) {
    return null;
  }
  return diary;
}

async function writeDiaryEntry(
  mood,
  dayInOneWord,
  whatWasGood,
  whatCouldBeBetter,
  diaryEntry,
  userID,
  date
) {
  const diaryCollection = await getCollection("diary");
  const newDiaryEntry = await diaryCollection.insertOne({
    mood,
    dayInOneWord,
    whatWasGood,
    whatCouldBeBetter,
    diaryEntry,
    userID,
    date,
  });
  if (!newDiaryEntry) {
    return null;
  }
  return newDiaryEntry;
}

exports.writeDiaryEntry = writeDiaryEntry;
exports.readDiary = readDiary;
