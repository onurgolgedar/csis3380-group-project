import { useState } from "react";
import "../css_files/sectionArcade_style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const ArcadePoster = ({ game }) => {
  // console.log("game,", game);
  const [heartButtonClicked, setHeartButtonClicked] = useState(game.isFavorited);
  const [heartBumping, setHeartBumping] = useState(false);

  // const handleHeartButton = (e) => {
  //   setHeartBumping(true);
  //   setTimeout(() => setHeartBumping(false), 1500);
  //   handleButtonUpdate(e);
  // };

  // const handleButtonUpdate = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.put(
  //       `${process.env.REACT_APP_API_URL}/games/${game._id}`,
  //       { isFavorited: !game.isFavorited}
  //     );
  //     game.isFavorited = !game.isFavorited;
  //     console.log("answer",response.data);
  //     setHeartButtonClicked(response.data.isFavorited)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
              {game._id !== null ? (
                <NavLink
                  to={{
                    pathname: `${game._id}/description`,
                  }}
                  state={{ game_data: game }}
                  className="button_poster"
                >
                  GO
                </NavLink>
              ) : (
                <NavLink
                  to={{
                    pathname: `${game.id}/description`,
                  }}
                  state={{ game_data: game }}
                  className="button_poster"
                >
                  GO
                </NavLink>
              )}
              {/* <button
                href="/#"
                className={`button_poster btn-heart ${
                  heartButtonClicked ? "btn-Clicked" : ""
                }`}
                stlyle={{ outline: "none" }}
                onClick={handleHeartButton}
              >
                {heartBumping ? (
                  <span className="heart-Icon heart-Animated">&hearts;</span>
                ) : (
                  <span className="heart-Icon">&hearts;</span>
                )}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcadePoster;
