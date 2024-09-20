/* eslint-disable no-unused-vars */
import { useState } from "react";

import Sidenav from "./components/Sidenav";
import Back from "./components/Back";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Sidenav />
      <Back />
      <Work />
      <Projects />
      <Background />
      <Contact />
    </div>
  );
}

export default App;
