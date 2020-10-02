import React, { useEffect, useState } from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import DiaryListElement from "../components/DiaryListElement";
import Searchbar from "../components/Searchbar";
import { fetchDiaryEntries } from "../api/diary";
import Loading from "./LoadingPage";

function DiaryList() {
  const [diaryEntries, setDiaryEntries] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showDiaryEntries() {
      const newDiaryEntries = await fetchDiaryEntries(userID);
      setDiaryEntries(newDiaryEntries);
      setIsLoaded(true);
    }
    showDiaryEntries();
  }, [userID]);

  const filteredDiary = diaryEntries?.filter((entries) => {
    return entries.date.startsWith(query);
  });

  if (!isLoading) {
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
