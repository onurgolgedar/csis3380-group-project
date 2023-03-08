import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import SectionHome from "./components/Home";
import SectionService from "./components/Service";
import SectionAbout from "./components/About";
import SectionNotFound from "./components/NotFound";

import { useState } from "react";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SectionHome />} />
        <Route path="/service" element={<SectionService />} />
        <Route path="/about" element={<SectionAbout />} />
        <Route path="*" element={<SectionNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
