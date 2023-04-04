import "../css_files/sectionArcade_style.css";
import { NavLink } from "react-router-dom";
const ArcadePoster = ({ game }) => {
  // console.log(game);

  return (
    <div className="items">
      <div className="poster">
        <div className="poster_wrapper">
          <img
            src={game.background_image}
            className="poster_imageBackground"
            alt="background_image"
          />
          <div className="poster_content">
            <h4>{game.name}</h4>
            <div className="buttons_poster_wrapping">
              <NavLink
                to={{
                  pathname: `${game.id}/description`,
                }}
                state={{ game_data: game }}
                className="button_poster"
              >
                GO
              </NavLink>
              <a href="#" className="button_poster btn-heart">
                &hearts;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcadePoster;
