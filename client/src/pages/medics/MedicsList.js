import React, { useEffect, useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import ContentWithAddFunction from "../../components/ContentwithAddFunction";
import AddButton from "../../components/AddButton";
import MedicsListElement from "../../components/MedicsListElement";
import Searchbar from "../../components/Searchbar";
import { Link } from "react-router-dom";
import { fetchMedics } from "../../api/medics";
import Loading from "../../pages/LoadingPage";

function Medics() {
  const [medics, setMedics] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    async function showMedics() {
      const newMedics = await fetchMedics(userID);
      setMedics(newMedics);
      setIsLoaded(true);
    }
    showMedics();
  }, [userID]);

  const filteredMedics = medics?.filter((medic) => {
    return medic.name.startsWith(query);
  });

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenHeadSection={
        <Searchbar
          placeholder={"Medikament suchen"}
          value={query}
          onChange={(value) => setQuery(value)}
        />
      }
      childrenMainSection={
        <ContentWithAddFunction
          addcomponent={
            <Link to="/main/medics/add">
              <AddButton description={"Medikament hinzufügen"} />
            </Link>
          }
          content={
            <>
              {filteredMedics?.map((medic) => (
                <MedicsListElement
                  key={medic._id}
                  name={medic.name}
                  intakeMorning={medic.intakeMorning}
                  intakeMidday={medic.intakeMidday}
                  intakeEvening={medic.intakeEvening}
                  intakeNight={medic.intakeNight}
                  id={medic._id}
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
