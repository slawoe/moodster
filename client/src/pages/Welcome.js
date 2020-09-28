import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StyledTextContainer from "../components/StyledTextContainer";
import BasicPageLayout from "../components/BasicPageLayout";
import { Link } from "react-router-dom";
import Moodster from "../assets/images/moodster.svg";
import Loading from "./LoadingPage";

function Welcome({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);

  useEffect(() => {
    async function setUserNickName() {
      const nickName = sessionStorage.getItem("nickName");
      setUser(nickName);
      setIsLoaded(true);
    }
    setUserNickName();
  }, []);

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <StyledTextContainer>
            <p>Hallo {user}!</p>
            <p>Ich freue mich, dass Du da bist!</p>
          </StyledTextContainer>
          <StyledTextContainer>
            <p>
              Lass uns am besten gleich den heutigen Tagebucheintrag schreiben.
              <Link to="/main/questionnaire">Hier klicken...</Link>
            </p>
            <p>
              <Link to="/main/help">
                <p>
                  Wenn ich dir erklären soll, wie die App funktioniert, klick
                  einfach auf mich drauf.
                </p>
                <img src={Moodster} alt="Logo" />
              </Link>
            </p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.element.isRequired,
};
