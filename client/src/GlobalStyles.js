import React from "react";
import { Global, css } from "@emotion/core";

const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "SilomBol";
          src: local("SilomBol"),
            url(./assets/fonts/SilomBol.ttf) format("truetype");
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
          @import url("//db.onlinewebfonts.com/c/784670a6bb0f0b4c713488e8f162a30a?family=Silom");
          @font-face {
            font-family: "Silom";
            src: url("//db.onlinewebfonts.com/t/784670a6bb0f0b4c713488e8f162a30a.eot");
            src: url("//db.onlinewebfonts.com/t/784670a6bb0f0b4c713488e8f162a30a.eot?#iefix")
                format("embedded-opentype"),
              url("//db.onlinewebfonts.com/t/784670a6bb0f0b4c713488e8f162a30a.woff2")
                format("woff2"),
              url("//db.onlinewebfonts.com/t/784670a6bb0f0b4c713488e8f162a30a.woff")
                format("woff"),
              url("//db.onlinewebfonts.com/t/784670a6bb0f0b4c713488e8f162a30a.ttf")
                format("truetype"),
              url("//db.onlinewebfonts.com/t/784670a6bb0f0b4c713488e8f162a30a.svg#Silom")
                format("svg");
          }
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
