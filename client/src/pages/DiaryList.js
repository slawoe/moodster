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
  const userName = "slawo.e";

  useEffect(() => {
    async function showDiaryEntries() {
      const newDiaryEntries = await fetchDiaryEntries(userName);
      setDiaryEntries(newDiaryEntries);
      setIsLoaded(true);
    }
    showDiaryEntries();
  }, []);

  const filteredDiary = diaryEntries?.filter((entries) => {
    return entries.date.startsWith(query);
  });

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenheadsection={
        <>
          <Searchbar
            placeholder="Tagebucheintrag suchen"
            value={query}
            onChange={(value) => setQuery(value)}
          />
        </>
      }
      childrenmainsection={
        <>
          {filteredDiary?.map((diaryentry) => (
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
