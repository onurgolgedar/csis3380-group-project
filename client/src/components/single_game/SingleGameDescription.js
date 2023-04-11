import "../../css_files/sectionArcade_style.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleGameCommentSection from "./SingleGameCommentSection";
import axios from "axios";
axios.defaults.withCredentials = true;

const SingleGameDescription = ({ data, type }) => {
  const [gameDescription, setGameDescription] = useState(null);
  const [heartButtonClicked, setHeartButtonClicked] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [heartBumping, setHeartBumping] = useState(false);
  const [retrievedComments, setRetrievedComments] = useState([]);

  const handleGameDescription = (text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const htmlObject = { __html: doc.body.innerHTML };
    return htmlObject;
  };

  const handleHeartButton = (e) => {
    setHeartBumping(true);
    setTimeout(() => setHeartBumping(false), 1500);
    if (type === "arcade") {
      handleGameLikeDisliked();
      setHeartButtonClicked((value) => !value);
    }
  };

  useEffect(() => {
    if (type !== "arcade") {
      fetch(
        `https://rawg.io/api/games/${data.id}?token&key=${process.env.REACT_APP_API_URL}`
      )
        .then((res) => res.json())
        .then((result) => {
          setGameDescription(handleGameDescription(result.description));
        })
        .catch((error) => console.error(error));
    } else {
      handleRetrieveComments();
      handleCheckLogIn();
      handleIfGameIsFavorited();
    }
  }, [data.id]);

  const handleCheckLogIn = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/users/checklogin`)
      .then((response) => {
        console.log("Handle check login Game Description", response.data);
        setIsUserLoggedIn(response.data.isLoggedIn);
      })
      .catch((error) => console.error(error));
  };

  const handleRetrieveComments = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/gamereviews/${data._id}`)
        .then((response) => {
          setRetrievedComments(response.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleIfGameIsFavorited = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/games/${data._id}/checklike`)
        .then((response) => {
          console.log("TESTING GAME IS FAVORITE: ", response.data);
          setHeartButtonClicked(response.data.isFavorite);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGameLikeDisliked = async () => {
    try {
      await axios
        .put(`${process.env.REACT_APP_API_URL}/games/${data._id}`)
        .then((response) => {
          handleIfGameIsFavorited();
        })
        .catch((error) => {
          console.error(error.message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const scrollDown = (element_id) => {
    const div = document.getElementById(element_id);
    const y_coord = div.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y_coord, behavior: "smooth" });
  };

  return (
    <div className="SingleGameDescription_Wrapper">
      {/* DESCRIPTION SECTION */}
      <div className="SingleGameTop_Wrapper">
        <div className="SingleGamePoster_Container">
          <img src={data.background_image} alt="Game Poster" />
          <div className="SingleGameTop_ButtonsWrapper">
            {type === "arcade" && (
              <button
                href="/#"
                className={`btn btn-SingleGameTop btn-heart btn-light ${
                  heartButtonClicked ? "btn-Clicked" : ""
                }`}
                onClick={handleHeartButton}
                disabled={!isUserLoggedIn}
              >
                {heartBumping ? (
                  <span className="heart-Icon heart-Animated">&hearts;</span>
                ) : (
                  <span className="heart-Icon">&hearts;</span>
                )}
              </button>
            )}
            {type === "arcade" && (
              <button
                href="/#"
                className="btn btn-SingleGameTop btn-light"
                onClick={() => scrollDown("comment_section")}
              >
                COMMENTS
              </button>
            )}
          </div>
        </div>
        <div className="SingleGameDescription_Container">
          <div className="SingleGameDescription_TitleContainer">
            <h4>{data.name}</h4>
          </div>
          {type === "wiki" && (
            <div className="SingleGameDescription_DescContainer">
              <p>P L A T F O R M S</p>
              <h6>
                {data.platforms.map((result, index) => {
                  if (index === data.platforms.length - 1) {
                    return result.platform.name;
                  }
                  return result.platform.name + " - ";
                })}
              </h6>
            </div>
          )}

          {type === "wiki" && (
            <div className="SingleGameDescription_DescContainer">
              <p>R A T I N G</p>
              <MetacriticPill rating={data.metacritic} />
            </div>
          )}
          <div className="SingleGameDescription_DescContainer">
            <p>R E L E A S E - D A T E</p>
            <h6>{data.released}</h6>
          </div>
          <div className="SingleGameDescription_DescContainer">
            <p>G E N R E</p>
            <h6>
              {type === "arcade"
                ? data.genre
                : data.genres.map((genre, index) => {
                    if (index === data.genres.length - 1) {
                      return genre.name;
                    }
                    return genre.name + " - ";
                  })}
            </h6>
          </div>
          <div className="SingleGameDescription_DescContainer">
            <p>D E S C R I P T I O N</p>
            {type === "arcade" ? (
              <h6> {data.description}</h6>
            ) : (
              <div
                className="gameDescription-Text"
                dangerouslySetInnerHTML={gameDescription}
              />
            )}
          </div>
        </div>
      </div>

      {/* COMMENT SECTION */}
      {type === "arcade" && (
        <SingleGameCommentSection
          comments={retrievedComments}
          handleRetrieveComments={handleRetrieveComments}
          gameId={data._id}
        />
      )}
    </div>
  );
};

const MetacriticPill = ({ rating }) => {
  if (rating > 75) {
    return (
      <h6
        className="metacritic-pill"
        style={{ backgroundColor: "rgb(99, 200, 99)" }}
      >
        {rating} / 100
      </h6>
    );
  } else if (rating > 50) {
    return (
      <h6 className="metacritic-pill" style={{ backgroundColor: "yellow" }}>
        {rating} / 100
      </h6>
    );
  } else {
    return (
      <h6 className="metacritic-pill" style={{ backgroundColor: "red" }}>
        {rating} / 100
      </h6>
    );
  }
};

export default SingleGameDescription;
