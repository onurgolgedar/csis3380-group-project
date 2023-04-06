import "../../css_files/userFavGames_style.css";

function UserFavGames() {
    const gamesListWiki = [
        {
        id: 0,
        src: "image src",
        title: "Game1"
        },
        {
          id: 1,
          src: "image src",
          title: "Game2"
        },
        {
          id: 2,
          src: "image src",
          title: "Game3"
        },
        {
          id: 3,
          src: "image src",
          title: "Game4"
          },
          {
            id: 4,
            src: "image src",
            title: "Game5"
          },
          {
            id: 5,
            src: "image src",
            title: "Game6"
          }
      ]
      const gamesListArcade = []

    return (
    <div class="userFav--body">
        <div class="userFav--container card">
            <div class="fav--gamesHeading">Favourite List</div>
            <h1 class="fav--games2ndHeading">Favourite <span>Wiki</span> Games</h1>
            {gamesListWiki.length > 0 ? (
              <div class="fav--gamesScrollContainer">
                {
                gamesListWiki.map(gameWiki => <div class="fav--element"><h4>{gameWiki.title}</h4> <img src="{gameWiki.src}"/> <button class="remove--favGame" onClick="{deleteFav(gameWiki.id)}" >Remove </button></div>)
                }
              </div>) : (<h1 class="empty--favGame">You do not have any Favorites yet... Don't worry add some! (Link to Wiki)</h1> )
            }
            
            <h1 class="fav--games2ndHeading">Favourite <span>Arcade</span> Games</h1>
            {gamesListArcade.length > 0 ? (
              <div class="fav--gamesScrollContainer">
                {
                gamesListArcade.map(gameArcade => <div class="fav--element"><h4>{gameArcade.title}</h4> <img src="{gameArcade.src}"/> <button class="remove--favGame" onClick="{deleteFav(gameArcade.id)}" >Remove </button></div>)
                }
              </div>) : (<h1 class="empty--favGame">You do not have any Favorites yet... Don't worry add some! (Link to Arcade)</h1> )
            }
            
        </div>  
    </div>
    );
}

export default UserFavGames;