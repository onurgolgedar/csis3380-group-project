import "../../css_files/userFavGames_style.css";
import { NavLink } from "react-router-dom";

function UserFavGames() {
  const gamesListWiki = [
    {
      id: 0,
      src: "image src",
      title: "Game1",
    },
    {
      id: 1,
      src: "image src",
      title: "Game2",
    },
    {
      id: 2,
      src: "image src",
      title: "Game3",
    },
    {
      id: 3,
      src: "image src",
      title: "Game4",
    },
    {
      id: 4,
      src: "image src",
      title: "Game5",
    },
    {
      id: 5,
      src: "image src",
      title: "Game6",
    },
  ];
  const gamesListArcade = [];

  return (
    <div className="userFav--body">
      <div className="userFav--container card">
        <div className="fav--gamesHeading">Favourite List</div>
        <div className="favlists-container">
          <div className="singleFavList-container">
            <h1 class="fav--games2ndHeading">
              Favourite <span>Wiki</span> Games
            </h1>
            {gamesListWiki.length > 0 ? (
              <div class="fav--gamesScrollContainer">
                {gamesListWiki.map((gameWiki) => (
                  <div class="fav--element">
                    <h4>{gameWiki.title}</h4> <img src="{gameWiki.src}" />{" "}
                    <button
                      class="remove--favGame"
                      onClick="{deleteFav(gameWiki.id)}"
                    >
                      Remove{" "}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="empty--favGame">
                You do not have any Favorites yet... Don't worry add some! (
                <span>
                  <NavLink to="/wiki">Go To Wiki</NavLink>
                </span>
                )
              </h1>
            )}
          </div>

          <div className="singleFavList-container">
            <h1 className="fav--games2ndHeading">
              Favourite <span>Arcade</span> Games
            </h1>
            {gamesListArcade.length > 0 ? (
              <div className="fav--gamesScrollContainer">
                {gamesListArcade.map((gameArcade) => (
                  <div className="fav--element">
                    <h4>{gameArcade.title}</h4> <img src="{gameArcade.src}" />{" "}
                    <button
                      className="remove--favGame"
                      onClick="{deleteFav(gameArcade.id)}"
                    >
                      Remove{" "}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="empty--favGame">
                You do not have any Favorites yet... Don't worry add some! (
                <span>
                  <NavLink to="/arcade">Go To Arcade</NavLink>
                </span>
                )
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFavGames;
