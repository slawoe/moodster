import React from "react";
import Collapsible from "../components/DiaryListElement";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
`;

const mockupData = {
  date: "21.05.1999",
  mood: "5",
  dayInOneWord: "great",
  whatWasGood: "my Component",
  whatCouldBeBetter: "daily output",
  diaryEntry: "everything is great",
};

export default {
  title: "CollapsibleCard",
  component: Collapsible,
};

const Template = () => (
  <Wrapper>
    <Collapsible
      date={mockupData.date}
      mood={mockupData.mood}
      dayInOneWord={mockupData.dayInOneWord}
      whatWasGood={mockupData.whatWasGood}
      whatCouldBeBetter={mockupData.whatCouldBeBetter}
      diaryEntry={mockupData.diaryEntry}
    />
  </Wrapper>
);

export const CollapsibleCard = Template.bind({});
