import "../css_files/sectionArcade_style.css";
import { NavLink } from "react-router-dom";
import Poster from "../test_data/poster.jpg";

const ArcadePoster = ({image, title}) => {

  return (
    <div className="items">
      <div className="poster">
        <div className="poster_wrapper">
          <img src={image} className="poster_imageBackground" alt="background_image" />
          <div className="poster_content">
            <h4>{title}</h4>
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
        
      </div>
    </div>
  );
};

export default ArcadePoster;
