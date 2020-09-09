import React from "react";
import { Global, css } from "@emotion/core";

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
          --main-bg-color: #4da4bc;
          --main-text-color: #f3cf78;
        }
        #root {
          height: 100vh;
          width: 100vw;
          margin: 0;

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
          background-color: var(--main-bg-color);
          font-family: "Silom";
        }
        code {
        }
      `}
    />
  );
};
export default GlobalStyles;
