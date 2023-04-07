import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

import Footer from "./components/footer";
import Header from "./components/header";
import SectionHome from "./components/Home";
import SectionArcade from "./components/Arcade";
import SectionWiki from "./components/wiki/Wiki"
import SectionAbout from "./components/About";
import SectionNotFound from "./components/NotFound";
import SingleGame from "./components/single_game/SingleGame";
import UserProfile from "./components/user/userProfile";
import UserFavGames from "./components/user/userFavGames";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    async function checkLoginStatus() {
      const response = await fetch('/api/check-login');
      const data = await response.json();
      if (data.isLoggedIn) {
        setIsUserLoggedIn(true);
      }
    }
    checkLoginStatus();
  }, []);

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
        <Route path="/user/:userId/favgames" element={<UserFavGames />}/>
        <Route path="/about" element={<SectionAbout />} />
        
        <Route path="*" element={<SectionNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
