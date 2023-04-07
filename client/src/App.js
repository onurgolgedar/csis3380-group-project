import "./App.css";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Helmet } from "react-helmet"
=======
>>>>>>> 2b671d4407cdc002e0745d7c5ae9048da8d17955

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
      <Head>
        <script
          type="text/javascript"
          src="./games/game_fhockey/HTML5.js?KQMZB=426724451"/>
      </Head>
      
      <Header />
      <Routes>
        <Route path="/" element={<SectionHome />} />
        <Route path="/arcade" element={<SectionArcade />} >
        </Route>
        <Route path="/arcade/:gameId/description" element={<SingleGame type={"arcade"} />} />
        <Route path="/arcade/:gameId/play" element={<SingleGame type={"arcade"} />} />
        <Route path="/wiki" element={<SectionWiki />} />
        <Route path="/wiki/:gameId/description" element={<SingleGame type={"wiki"} />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/user/:userId/favgames" element={<UserFavGames />} />
        <Route path="/about" element={<SectionAbout />} />

        <Route path="*" element={<SectionNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
