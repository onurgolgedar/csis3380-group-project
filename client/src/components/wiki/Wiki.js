import "../../css_files/sectionArcade_style.css";
import { useEffect, useState } from "react";

import ArcadePoster from "../Arcade_GamePoster";

const { RAWG_API_KEY } = require('../../api-key.js');

const SectionWiki = () => {
  const [genreSelected, setGenreSelected] = useState("ALL");
  const [searchState, setSearchState] = useState("");
  const [gamesAnswer, setGamesAnswer] = useState([]);

  useEffect(() => {
    fetch(`https://rawg.io/api/games?token&key=${RAWG_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setGamesAnswer(data.results);
      })
      .catch(error => console.error(error));
  }, []);

  const handleClick = (path) => {
    setGenreSelected(path);
  };

  const handleSearchChange = (e) => {
    let search_aux = e.target.value;
    if(search_aux.length <= 255) {
      setSearchState(search_aux);
    }
    console.log(search_aux)
  };

  const onSearch = (e) => {
    e.preventDefault();
    var search = searchState.split(' ').join('-').toLowerCase();
    setGamesAnswer([]);
    fetch(`https://rawg.io/api/games?token&key=${RAWG_API_KEY}&search=${search}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.results.length === 0) {
          alert("no games with that name found")
        } else {
          setGamesAnswer(data.results);
        }
      })
    .catch(error => console.error(error));
  }

  const Genre1 = "Genre 1";
  const Genre2 = "Genre 2";
  const Genre3 = "Genre 3";
  const Genre4 = "Genre 4";

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
              onChange={handleSearchChange}
            />
            <button type="submit" class="sectionWiki_searchButton" onClick={onSearch}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <p style={{ fontSize: "20px" }}>Filters:</p>

          <div className="filter_buttons_wrapper">
            <a
              href="#"
              className={
                genreSelected === "ALL"
                  ? "button_filter button_filter_activate"
                  : "button_filter"
              }
              onClick={() => {
                handleClick("ALL");
              }}
            >
              ALL
            </a>
            <a
              href="#"
              className={
                genreSelected === "FAVORITES"
                  ? "button_filter button_filter_activate"
                  : "button_filter"
              }
              onClick={() => {
                handleClick("FAVORITES");
              }}
            >
              FAVORITES
            </a>
            <a
              href="#"
              className={
                genreSelected === Genre1
                  ? "button_filter button_filter_activate"
                  : "button_filter"
              }
              onClick={() => {
                handleClick(Genre1);
              }}
            >
              {Genre1}
            </a>
            <a
              href="#"
              className={
                genreSelected === Genre2
                  ? "button_filter button_filter_activate"
                  : "button_filter"
              }
              onClick={() => {
                handleClick(Genre2);
              }}
            >
              {Genre2}
            </a>
            <a
              href="#"
              className={
                genreSelected === Genre3
                  ? "button_filter button_filter_activate"
                  : "button_filter"
              }
              onClick={() => {
                handleClick(Genre3);
              }}
            >
              {Genre3}
            </a>
            <a
              href="#"
              className={
                genreSelected === Genre4
                  ? "button_filter button_filter_activate"
                  : "button_filter"
              }
              onClick={() => {
                handleClick(Genre4);
              }}
            >
              {Genre4}
            </a>
          </div>
        </div>
        <div className="sectionArcade--mainContent">
          {
            gamesAnswer.map((game, index) => {
              return <ArcadePoster key={index} title={game.name} image={game.background_image}/>
            })
          }
        </div>
      </section>
    </div>
  );
};

export default SectionWiki;
