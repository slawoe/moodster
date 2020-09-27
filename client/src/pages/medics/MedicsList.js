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
  const userName = sessionStorage.getItem("userName");

  useEffect(() => {
    async function showMedics() {
      const newMedics = await fetchMedics(userName);
      setMedics(newMedics);
      setIsLoaded(true);
    }
    showMedics();
  }, [userName]);

  const filteredMedics = medics?.filter((medic) => {
    return medic.name.startsWith(query);
  });

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenheadsection={
        <Searchbar
          placeholder={"Medikament suchen"}
          value={query}
          onChange={(value) => setQuery(value)}
        />
      }
      childrenmainsection={
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
                  key={medic.id}
                  name={medic.name}
                  intakeMorning={medic.intakeMorning}
                  intakeMidday={medic.intakeMidday}
                  intakeEvening={medic.intakeEvening}
                  intakeNight={medic.intakeNight}
                  id={medic.id}
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
