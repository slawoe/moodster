import React, { useEffect, useState } from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import DiaryListElement from "../components/DiaryListElement";
import Searchbar from "../components/Searchbar";
import { fetchDiaryEntries } from "../api/diary";
import Loading from "./LoadingPage";

function DiaryList() {
  const [diaryEntries, setDiaryEntries] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const userName = "slawo.e";

  useEffect(() => {
    async function showDiaryEntries() {
      const newDiaryEntries = await fetchDiaryEntries(userName);
      setDiaryEntries(newDiaryEntries);
      setIsLoaded(true);
    }
    showDiaryEntries();
  }, []);

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenheadsection={
        <>
          <Searchbar placeholder="Tagebucheintrag suchen" />
        </>
      }
      childrenmainsection={
        <>
          {diaryEntries?.map((diaryentry) => (
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
