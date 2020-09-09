import React from "react";
import { Global, css } from "@emotion/core";
const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "SilomBol";
          src: local("SilomBol"),
            url(./assets/fonts/SilomBol.otf) format("truetype");
        }

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
        }
        code {
        }
      `}
    />
  );
};
export default GlobalCSS;
