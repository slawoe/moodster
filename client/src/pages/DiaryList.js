import React, { useEffect, useState } from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import DiaryListElement from "../components/DiaryListElement";
import Searchbar from "../components/Searchbar";
import { fetchDiaryEntries } from "../api/diary";
import Loading from "./LoadingPage";

function DiaryList() {
  const [diaryEntries, setDiaryEntries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showDiaryEntries() {
      try {
        const newDiaryEntries = await fetchDiaryEntries(userID);
        setDiaryEntries(newDiaryEntries);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    showDiaryEntries();
  }, [userID]);

  const filteredDiary = diaryEntries?.filter((entries) => {
    return entries.date.startsWith(query);
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenHeadSection={
        <>
          <Searchbar
            placeholder="Tagebucheintrag suchen"
            value={query}
            onChange={(value) => setQuery(value)}
          />
        </>
      }
      childrenMainSection={
        <>
          {filteredDiary?.map((diaryEntry) => (
            <DiaryListElement
              key={diaryEntry._id}
              date={diaryEntry.date}
              mood={diaryEntry.mood}
              dayInOneWord={diaryEntry.dayInOneWord}
              whatWasGood={diaryEntry.whatWasGood}
              whatCouldBeBetter={diaryEntry.whatCouldBeBetter}
              diaryEntry={diaryEntry.diaryEntry}
            />
          ))}
        </>
      }
    />
  );
}

export default DiaryList;
