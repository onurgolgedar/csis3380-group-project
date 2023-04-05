import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import SectionHome from "./components/Home";
import SectionArcade from "./components/Arcade";
import SectionWiki from "./components/wiki/Wiki"
import SectionAbout from "./components/About";
import SectionNotFound from "./components/NotFound";
import SingleGame from "./components/single_game/SingleGame"
import UserProfile from "./components/user/userProfile"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SectionHome />} />
        <Route path="/arcade" element={<SectionArcade />} >
        </Route>
        <Route path="/arcade/:gameId/description" element={<SingleGame type={"arcade"}/>} />
        <Route path="/arcade/:gameId/play" element={<SingleGame type={"arcade"}/>} />
        <Route path="/wiki" element={<SectionWiki />}/>
        <Route path="/wiki/:gameId/description" element={<SingleGame type={"wiki"}/>} />
        <Route path="/user/:userId" element={<UserProfile />}/>
        <Route path="/about" element={<SectionAbout />} />
        
        <Route path="*" element={<SectionNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
