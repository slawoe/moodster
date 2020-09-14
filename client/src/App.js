import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import {
  BrowserRouter as Router,
  // Switch, Route, Link
} from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
