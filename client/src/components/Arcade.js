import "../css_files/sectionArcade_style.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ArcadePoster from "./Arcade_GamePoster";
axios.defaults.withCredentials = true;

const SectionArcade = () => {
  const searchBarRef = useRef(null);
  const [searchState, setSearchState] = useState("");
  const [retrievedGames, setRetrievedGames] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  useEffect(() => {
    searchBarRef.current.focus();
    handleRetrieveAllGames();
  }, []);

  const handleSearchChange = (e) => {
    let search_aux = e.target.value;
    if (search_aux.length <= 100) {
      setSearchState(search_aux);
    }
  };

  const handleRetrieveAllGames = () => {
    axios
      .get("https://gameship.onrender.com/api/games/")
      .then((response) => {
        setRetrievedGames(response.data);
        if(response.data.length === 0) setLoadingMessage("Game(s) not found")
      })
      .catch((error) => console.error(error.message));
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (searchState !== "") {
      const encodedSearch = encodeURIComponent(searchState);
      axios
        .get(`https://gameship.onrender.com/api/games/search-arcade/${encodedSearch}`)
        .then((response) => {
          setRetrievedGames(response.data);
          if(response.data.length === 0) setLoadingMessage("Game(s) not found")
        })
        .catch((error) => console.error(error.message));
    } else {
      handleRetrieveAllGames();
    }
  };

  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      onSearch(e);
    }
  };

  return (
    <div>
      <section className="sectionArcade--body" id="sectionArcade">
        <div className="sectionArcade--mainText">
          <h2>
            Ar<span>cade</span>
          </h2>
          <p style={{ fontSize: "20px" }}>
            Choose or Search for the game you want to play:
          </p>
          <div className="sectionWiki_searchBar">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search a game's title..."
              value={searchState}
              ref={searchBarRef}
              onChange={handleSearchChange}
              onKeyDown={onSearchEnter}
            />
            <button
              type="submit"
              className="sectionWiki_searchButton"
              onClick={onSearch}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div className="sectionArcade--mainContent">
          {retrievedGames.length === 0 ? (
            <h2 style={{color: "white"}}>{loadingMessage}</h2>
          ) : (
            retrievedGames.map((singleRetrievedGame, index) => {
              return <ArcadePoster key={index} game={singleRetrievedGame} />;
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default SectionArcade;
