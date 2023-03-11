import "../../css_files/sectionArcade_style.css";
import "../../css_files/singleGame_style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import SingleGameDescription from "./SingleGameDescription";
import SingleGamePlay from "./SingleGamePlay";

const SectionArcade = () => {
  const [linkGame, setLinkGame] = useState("description");
  const { pathname } = useLocation();

  const handleClick = (path) => {
    setLinkGame(path)
  }

  return (
    <div>
      <section className="sectionArcade--body">
        <div className="SingleGame_TopSection">
          <h2>Arcade</h2>
          <div className="SingleGame_TopButtons">
            <NavLink
              to={"/arcade/123/description"}
              type="button"
              className={linkGame === "description" ? "btn btn-light" : "btn btn-dark"}
              onClick={() => {handleClick("description")}}
            >
              Description/Comments
            </NavLink>
            <NavLink
              to={"/arcade/123/play"}
              type="button"
              className={linkGame === "play" ? "btn btn-light play_btn" : "btn btn-dark play_btn"}
              onClick={() => {handleClick("play")}}
            >
              PLAY
            </NavLink>
          </div>
        </div>
        <div className="Content-Wrapper">
            {linkGame == "description" ? (
            <SingleGameDescription />
          ) : (
            <SingleGamePlay />
          )}
        </div>
        
      </section>
    </div>
  );
};

export default SectionArcade;
