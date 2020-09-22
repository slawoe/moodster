import React from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import DiaryListElement from "../components/DiaryListElement";

function DiaryList() {
  const mockupData = [
    {
      date: "21.05.1999",
      mood: "5",
      dayInOneWord: "great",
      whatWasGood: "my Component",
      whatCouldBeBetter: "daily output",
      diaryEntry: "everything is great",
    },
    {
      date: "22.05.1999",
      mood: "5",
      dayInOneWord: "greater",
      whatWasGood: "my App",
      whatCouldBeBetter: "daily output",
      diaryEntry: "everything is great",
    },
    {
      date: "23.05.1999",
      mood: "5",
      dayInOneWord: "greatest",
      whatWasGood: "I'am",
      whatCouldBeBetter: "daily output",
      diaryEntry: "everything is great",
    },
    {
      date: "24.05.1999",
      mood: "5",
      dayInOneWord: "badass",
      whatWasGood: "Hacker",
      whatCouldBeBetter: "daily output",
      diaryEntry: "everything is great",
    },
  ];

  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          {mockupData?.map((diaryentry) => (
            <DiaryListElement
              key={diaryentry.date}
              date={diaryentry.date}
              mood={diaryentry.mood}
              dayInOneWord={diaryentry.dayInOneWord}
              whatWasGood={diaryentry.whatWasGood}
              whatCouldBeBetter={diaryentry.whatCouldBeBetter}
              diaryEntry={diaryentry.diaryEntry}
            />
          ))}
        </>
      }
    />
  );
}

export default DiaryList;
