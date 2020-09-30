import React from "react";
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

function About() {
  const data = [
    { name: "1", uv: 1, pv: 0, amt: 0 },
    { name: "2", uv: 3, pv: 0, amt: 0 },
    { name: "3", uv: 5, pv: 0, amt: 0 },
    { name: "4", uv: 5, pv: 0, amt: 0 },
    { name: "5", uv: 6, pv: 0, amt: 0 },
    { name: "6", uv: 7, pv: 0, amt: 0 },
    { name: "7", uv: 9, pv: 0, amt: 0 },
    { name: "8", uv: 9, pv: 0, amt: 0 },
    { name: "9", uv: 2, pv: 0, amt: 0 },
    { name: "10", uv: 3, pv: 0, amt: 0 },
    { name: "11", uv: 4, pv: 0, amt: 0 },
    { name: "12", uv: 6, pv: 0, amt: 0 },
    { name: "13", uv: 7, pv: 0, amt: 0 },
    { name: "14", uv: 9, pv: 0, amt: 0 },
  ];

  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
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
                activeDot="false"
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

export default About;
