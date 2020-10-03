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
import { fetchDiaryEntries } from "../api/diary";
import Loading from "./LoadingPage";
import Error from "./ErrorPage";

function Analysis() {
  const [diaryEntries, setDiaryEntries] = useState(null);
  const [loading, setLoading] = useState(true);
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showLastDiaryEntries() {
      try {
        const newDiaryEntries = await fetchDiaryEntries(userID, 14);
        setDiaryEntries(newDiaryEntries);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    showLastDiaryEntries();
  }, [userID]);

  if (loading) {
    return <Loading />;
  } else if (diaryEntries.length !== 14) {
    return (
      <Error
        message="Du musst erst 14 Tagebucheinträge haben, bevor diese Funktion
      freigeschaltet wird."
      />
    );
  }

  let moodSum = 0;
  const len = diaryEntries.length;
  let item = 0;
  for (let i = 0; i < len; i++) {
    item = diaryEntries[i];
    moodSum = parseInt(item.mood) + moodSum;
  }
  const averageMood = (moodSum / diaryEntries.length).toFixed(1);

  let info;
  if (averageMood < 3) {
    info = (
      <>
        Du solltest dringend mit deinen Eltern oder deinem Arzt über deine
        Probleme sprechen!
      </>
    );
  } else if (averageMood < 5) {
    info = (
      <>
        Wenn deine Stimmung nicht besser wird, solltest Du bald einem
        Erwachsenen deine Sorgen erzählen.
      </>
    );
  } else if (averageMood < 8) {
    info = (
      <>Deine Stimmung ist gut, aber noch ist ein bisschen Luft nach oben.</>
    );
  } else {
    info = <>Schön, dass Du glücklich bist und es dir gut geht!</>;
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
          <p>
            Deine durchschnittliche Stimmung lag bei {averageMood} von 10
            Punkten.
          </p>
          <p>{info}</p>
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
