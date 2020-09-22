import React from "react";
import PropTypes from "prop-types";
import BasicPageLayout from "../components/BasicPageLayout";
import ContentWithAddFunction from "../components/ContentwithAddFunction";
import AddButton from "../components/AddButton";
import MedicsListElement from "../components/MedicsListElement";
import Searchbar from "../components/Searchbar";

const mockupData = [
  {
    name: "Resperidon",
    intakes: "5mg 08:00 Uhr, 10mg 12:00 Uhr, 5 mg 18:00 Uhr",
  },
  {
    name: "Medikament2",
    intakes: "5mg 08:00 Uhr, 10mg 12:00 Uhr, 5 mg 18:00 Uhr",
  },
  {
    name: "Medikament3",
    intakes: "5mg 08:00 Uhr, 10mg 12:00 Uhr, 5 mg 18:00 Uhr",
  },
  {
    name: "Medikament4",
    intakes: "5mg 08:00 Uhr, 10mg 12:00 Uhr, 5 mg 18:00 Uhr",
  },
];

function Medics() {
  return (
    <BasicPageLayout
      childrenheadsection={
        <>
          <Searchbar placeholder={"Medikament suchen"} />
        </>
      }
      childrenmainsection={
        <ContentWithAddFunction
          addcomponent={
            <>
              <AddButton description={"Medikament hinzufügen"} />
            </>
          }
          content={
            <>
              {mockupData?.map((medic) => (
                <MedicsListElement
                  key={medic.name}
                  intake={medic.name}
                  id={medic.name}
                />
              ))}
            </>
          }
        />
      }
    />
  );
}

export default Medics;

Medics.propTypes = {
  children: PropTypes.element.isRequired,
};
