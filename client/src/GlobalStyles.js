import React from "react";
import { Global, css } from "@emotion/core";
import Silom from "./assets/fonts/Silom.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        :root {
          --bg-main-color: #4da4bc;
          --text-color-normal: #f3cf78;
          --text-color-attention: #fca567;
          --text-color-danger: #cc5745;
          --card-background-color: #165b6e;
          --navigation-main-color: #f3cf78;
          --link-active-color: #165b6e;
          --link-inactive-color: #fca567;
          --button-proceed-color: #9bbf88;
          --button-danger-color: #cc5745;
          --button-main-color: #f3cf78;
          --button-ctacall-color: #cc5745;
          --inputfield-attention-color: #fca567;
          --inputfield-text-color: #165b6e;
          --main-elements-shadow: 3px 3px 6px #00000029;
          font-size: 14px;
          background-color: var(--bg-main-color);
          color: var(--text-color-normal);
          @font-face {
            src: url(${Silom}) format("truetype");
            font-family: "Silom";
          }
          font-family: "Silom";
        }
        #root {
          height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 5% 90% 5%;
          grid-template-rows: 10vh 83vh 7vh;
          overflow: hidden;
        }
        body {
          margin: 0;
          padding: 0;
        }

        button {
          font-family: "Silom";
          outline: none;
          cursor: pointer;
        }
        input {
          outline: none;
        }
      `}
    />
  );
};
export default GlobalStyles;
