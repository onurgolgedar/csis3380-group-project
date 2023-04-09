import "../../css_files/sectionArcade_style.css";
import { useEffect, useState, useRef } from "react";

import ArcadePoster from "../Arcade_GamePoster";
import FilterButton from "./FilterButton";

const { RAWG_API_KEY } = require("../../api-key.js");

const SectionWiki = () => {
  const searchBarRef = useRef(null);
  const [genreSelected, setGenreSelected] = useState("");
  const [searchState, setSearchState] = useState("");
  const [gamesAnswer, setGamesAnswer] = useState(null);

  useEffect(() => {
    searchBarRef.current.focus();
    fetch(`https://rawg.io/api/games?token&key=${RAWG_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setGamesAnswer(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    var search = searchState.split(" ").join("-").toLowerCase();
    let query_uri = "";
    if (genreSelected !== "" && searchState !== "") {
      query_uri = `https://rawg.io/api/games?token&key=${RAWG_API_KEY}&genres=${genreSelected}&search=${search}`
    } 
    else if (genreSelected !== "") {
      query_uri = `https://rawg.io/api/games?token&key=${RAWG_API_KEY}&genres=${genreSelected}`
    } 
    else if (searchState !== "") {
      query_uri = `https://rawg.io/api/games?token&key=${RAWG_API_KEY}&search=${search}`
    } 
    else {
      query_uri = `https://rawg.io/api/games?token&key=${RAWG_API_KEY}`
    }
    fetch(query_uri)
      .then((res) => res.json())
      .then((data) => {
        setGamesAnswer(data.results);
        console.log("Genre Specific query", gamesAnswer)
      })
      .catch((error) => console.error(error));
  }, [genreSelected]);


  const handleClick = (path) => {
    if(path === genreSelected) {
      setGenreSelected("");
    } else {
      setGenreSelected(path);
    }
  };

  const handleSearchChange = (e) => {
    let search_aux = e.target.value;
    if (search_aux.length <= 255) {
      setSearchState(search_aux);
    }
    console.log(search_aux);
  };

  const onSearch = (e) => {
    e.preventDefault();
    var search = searchState.split(" ").join("-").toLowerCase();
    let query_uri = "";
    setGamesAnswer([]);
    if (genreSelected !== "") {
      query_uri = `https://rawg.io/api/games?token&key=${RAWG_API_KEY}&genres=${genreSelected}&search=${search}`;
    } 
    else {
      query_uri = `https://rawg.io/api/games?token&key=${RAWG_API_KEY}&search=${search}`;
    } 
    fetch(query_uri)
      .then((res) => res.json())
      .then((data) => {
        setGamesAnswer(data.results);
        console.log("Genre Specific query", gamesAnswer)
      })
      .catch((error) => console.error(error));
  };

  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      onSearch(e);
    }
  };

  const Genres = ["FAVORITE", "action", "indie", "adventure", "shooter", "casual", "simulation", "strategy", 
    "arcade", "sports", "family", "fighting", "card", "educational", "racing"]

  return (
    <div>
      <section className="sectionArcade--body" id="sectionArcade">
        <div className="sectionArcade--mainText">
          <h2>
            Wi<span>ki</span>
          </h2>

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

          <p style={{ fontSize: "20px" }}>Filters:</p>

          <div className="filter_buttons_wrapper">
            
            {
              Genres.map((genre, index) => {
                return <FilterButton key={index} genre={genre} genre_selected={genreSelected} handleClick={handleClick}/>;
              })
            }
            
          </div>
        </div>
        <div className="sectionArcade--mainContent">
          {gamesAnswer === null ? (
            <div style={{width: "100px", height:"100px", marginTop:"60px"}} className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            gamesAnswer.map((game, index) => {
              return <ArcadePoster key={index} game={game} />;
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default SectionWiki;
