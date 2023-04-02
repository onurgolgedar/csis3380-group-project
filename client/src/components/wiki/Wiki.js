import "../../css_files/sectionArcade_style.css";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import ArcadePoster from "../Arcade_GamePoster";

const SectionWiki = () => {
  const [genreSelected, setGenreSelected] = useState("ALL");
  const [searchState, setSearchState] = useState("");

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

          <div class="sectionWiki_searchBar">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search a game's title..."
              value={searchState}
              onChange={handleSearchChange}
            />
            <button type="submit" class="sectionWiki_searchButton">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <p style={{ fontSize: "20px" }}>Filters:</p>

          <div class="filter_buttons_wrapper">
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
          <ArcadePoster />
          <ArcadePoster />
          <ArcadePoster />
          <ArcadePoster />
        </div>
      </section>
    </div>
  );
};

export default SectionWiki;