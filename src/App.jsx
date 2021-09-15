import React, { useState, useContext, useEffect } from "react";
import Footer from "./components/Footer";
import { GlobalStyle, ResetStyle } from "./components/GlobalStyle";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";
import { Home } from "./views/Home";
import { Switch, Route } from "react-router-dom";
import About from "./views/About.jsx";
import Header from "./components/Header";
import { Aimimi } from "./views/Aimimi";
import { WellWorthTheWait } from "./views/WellWorthTheWait";
import { ProjectVictoria } from "./views/ProjectVictoria";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Switch>
        {/* <Header/> */}

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/aimimi">
          <Aimimi />
        </Route>
        <Route path="/wellworth">
          <WellWorthTheWait />
        </Route>
        <Route path="/Victoria">
          <ProjectVictoria />
        </Route>
        {/* <Footer /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
