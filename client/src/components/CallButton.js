import React from "react";
import styled from "@emotion/styled";
import Phone from "../assets/icons/call.svg";

const CallingButton = styled.button`
  background-color: var(--button-ctacall-color);
  height: 73px;
  width: 73px;
  border-radius: 50%;
  border-style: none;
  box-shadow: var(--main-elements-shadow);
  & > a > img {
    object-fit: contain;
    height: 3em;
  }
`;

function CallButton(img) {
  return (
    <CallingButton>
      <a href="tel:08001110111">
        <img
          src={Phone}
          alt="Telefonhörer der Anruf bei Seelsorge auslöst"
        ></img>
      </a>
    </CallingButton>
  );
}

export default CallButton;
