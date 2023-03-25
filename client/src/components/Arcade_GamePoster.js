import "../css_files/sectionArcade_style.css";
import { NavLink } from "react-router-dom";
import Poster from "../test_data/poster.jpg";

const ArcadePoster = () => {
  const imageUrl = require("../test_data/poster.jpg");

  return (
    <div className="items">
      <div style={{ backgroundImage: `url(${Poster})` }} className="poster">
        <h4>Name Example</h4>
        <div className="buttons_poster_wrapping">
          <NavLink to={"123/description"} className="button_poster">
            SELECT
          </NavLink>
          <a href="#" className="button_poster">
            ADD
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArcadePoster;
