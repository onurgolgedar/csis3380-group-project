import { useState } from "react";
import "../css_files/sectionArcade_style.css";
import { NavLink } from "react-router-dom";

const ArcadePoster = ({ game }) => {
  // console.log(game);
  const [heartButtonClicked, setHeartButtonClicked] = useState(false);
  const [heartBumping, setHeartBumping] = useState(false);

  const handleHeartButton = () => {
    setHeartButtonClicked((value) => !value);
    setHeartBumping(true);
    setTimeout(() => setHeartBumping(false), 1500);
  };

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
              <button
                href="/#"
                className={`button_poster btn-heart ${
                  heartButtonClicked ? "btn-Clicked" : ""
                }`}
                stlyle={{outline:"none"}}
                onClick={handleHeartButton}
              >
                {heartBumping ? (
                  <span className="heart-Icon heart-Animated">&hearts;</span>
                ) : (
                  <span className="heart-Icon">&hearts;</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcadePoster;
