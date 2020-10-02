import React, { useEffect, useState } from "react";
import ChartContainer from "../components/ChartContainer";
import BasicPageLayout from "../components/BasicPageLayout";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { fetchLastDiaryEntries } from "../api/diary";
import Loading from "./LoadingPage";
import Error from "./ErrorPage";

function Analysis() {
  const [diaryEntries, setDiaryEntries] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showLastDiaryEntries() {
      const newDiaryEntries = await fetchLastDiaryEntries(userID);
      setDiaryEntries(newDiaryEntries);
      setIsLoaded(true);
    }
    showLastDiaryEntries();
  }, [userID]);

  if (!isLoading) {
    return <Loading />;
  } else if (diaryEntries.length !== 14) {
    return (
      <Error
        message="Du musst erst 14 Tagebucheinträge haben, bevor diese Funktion
      freigeschaltet wird."
      />
    );
  }
  const data = [
    { name: "1", uv: diaryEntries[0].mood, pv: 0, amt: 0 },
    { name: "2", uv: diaryEntries[1].mood, pv: 0, amt: 0 },
    { name: "3", uv: diaryEntries[2].mood, pv: 0, amt: 0 },
    { name: "4", uv: diaryEntries[3].mood, pv: 0, amt: 0 },
    { name: "5", uv: diaryEntries[4].mood, pv: 0, amt: 0 },
    { name: "6", uv: diaryEntries[5].mood, pv: 0, amt: 0 },
    { name: "7", uv: diaryEntries[6].mood, pv: 0, amt: 0 },
    { name: "8", uv: diaryEntries[7].mood, pv: 0, amt: 0 },
    { name: "9", uv: diaryEntries[8].mood, pv: 0, amt: 0 },
    { name: "10", uv: diaryEntries[9].mood, pv: 0, amt: 0 },
    { name: "11", uv: diaryEntries[10].mood, pv: 0, amt: 0 },
    { name: "12", uv: diaryEntries[11].mood, pv: 0, amt: 0 },
    { name: "13", uv: diaryEntries[12].mood, pv: 0, amt: 0 },
    { name: "14", uv: diaryEntries[13].mood, pv: 0, amt: 0 },
  ];
  return (
    <BasicPageLayout
      childrenMainSection={
        <ChartContainer>
          <h1>Deine Stimmungskurve</h1>
          <p>So ging es dir die letzten 14 Male.</p>
          <ResponsiveContainer width="90%" height={200} margin={0}>
            <LineChart width={300} height={200} data={data}>
              <Line
                type="linear"
                dot={false}
                dataKey="uv"
                stroke="var(--text-color-attention)"
                strokeWidth={3}
              />
              <CartesianGrid
                stroke="var(--text-color-normal)"
                strokeWidth={1}
              />
              <XAxis
                dataKey="name"
                stroke="var(--text-color-normal)"
                interval={0}
              />
              <YAxis
                stroke="var(--text-color-normal)"
                interval={0}
                scale="linear"
                ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              />
            </LineChart>
          </ResponsiveContainer>
          <p>Links (1-10): deine Stimmung.</p>
          <p>Unten (1-14): die Einträge, 1 ist der neueste.</p>
        </ChartContainer>
      }
    />
  );
}

export default Analysis;
