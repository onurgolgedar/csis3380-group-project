import "./App.css";

import Footer from "./components/footer"
import Header from "./components/header"
import SectionHome from "./components/Home"
import SectionService from './components/Service'
import SectionAbout from "./components/About"


import { useState } from "react";

function App() {

  return (
    <div>
      <Header/>
      <SectionHome />
      <SectionService />
      <SectionAbout />
      <Footer />
    </div>
  );
}

export default App;
