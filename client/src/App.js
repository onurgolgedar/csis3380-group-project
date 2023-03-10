import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import SectionHome from "./components/Home";
import SectionArcade from "./components/Arcade";
import SectionAbout from "./components/About";
import SectionNotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SectionHome />} />
        <Route path="/arcade" element={<SectionArcade />} />
        <Route path="/about" element={<SectionAbout />} />
        <Route path="*" element={<SectionNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
