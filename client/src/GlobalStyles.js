import React from "react";
import { Global, css } from "@emotion/core";
const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        #root {
          height: 100vh;
          width: 100vw;
          margin: 0px;
          @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
        }
        html {
        }
        body {
          background-color: #4da4bc;
          font-family: "Silom";

          @font-face {
            font-family: "Silom";
            src: local("Silom"),
              url(./src/assets/Fonts/SilomBol.ttf) format("ttf");
          }
        }
        code {
        }
      `}
    />
  );
};
export default GlobalCSS;
