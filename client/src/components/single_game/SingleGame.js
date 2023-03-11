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
              className="btn btn-light"
              onClick={() => {handleClick("description")}}
            >
              Description
            </NavLink>
            <NavLink
              to={"/arcade/123/play"}
              type="button"
              className="btn btn-dark play_btn"
              onClick={() => {handleClick("play")}}
            >
              PLAY
            </NavLink>
          </div>
        </div>
        {linkGame == "description" ? (
          <SingleGameDescription />
        ) : (
          <SingleGamePlay />
        )}
      </section>
    </div>
  );
};

export default SectionArcade;
