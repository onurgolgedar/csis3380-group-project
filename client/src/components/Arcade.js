import "../css_files/sectionArcade_style.css";
import { useState } from "react";

import ArcadePoster from "./Arcade_GamePoster";

const SectionArcade = () => {
  const [genreSelected, setGenreSelected] = useState("ALL");

  const handleClick = (path) => {
    setGenreSelected(path)
  }
  const Genre1 = "Genre 1"
  const Genre2 = "Genre 2"
  const Genre3 = "Genre 3"
  const Genre4 = "Genre 4"

  return (
    <div>
      <section className="sectionArcade--body" id="sectionArcade">
        <div className="sectionArcade--mainText">
          <h2>
            Our<span>Games</span>
          </h2>
          <p style={{ fontSize: "20px" }}>
            Choose the game genre you want to play:
          </p>
          <div className="filter_buttons_wrapper">
            <a href="/#" className={genreSelected === "ALL" ? "button_filter button_filter_activate" : "button_filter"}
              onClick={() => {handleClick("ALL")}}>
              ALL
            </a>
            <a href="/#" className={genreSelected === "FAVORITES" ? "button_filter button_filter_activate" : "button_filter"}
              onClick={() => {handleClick("FAVORITES")}}>
              FAVORITES
            </a>
            <a href="/#" className={genreSelected === Genre1 ? "button_filter button_filter_activate" : "button_filter"}
              onClick={() => {handleClick(Genre1)}}>
              {Genre1}
            </a>
            <a href="/#" className={genreSelected === Genre2 ? "button_filter button_filter_activate" : "button_filter"}
              onClick={() => {handleClick(Genre2)}}>
              {Genre2}
            </a>
            <a href="/#" className={genreSelected === Genre3 ? "button_filter button_filter_activate" : "button_filter"}
              onClick={() => {handleClick(Genre3)}}>
              {Genre3}
            </a>
            <a href="/#" className={genreSelected === Genre4 ? "button_filter button_filter_activate" : "button_filter"}
              onClick={() => {handleClick(Genre4)}}>
              {Genre4}
            </a>
          </div>
        </div>
        <div className="sectionArcade--mainContent">
          <ArcadePoster game={{"background_image":"./assets/poster.jpg", "description_image":"poster.jpg", "id": "1234", "name":"random_games"}}/>
          <ArcadePoster game={{"background_image":'./assets/poster.jpg', "description_image":"poster.jpg", "id": "1234", "name":"random_games"}}/>
          <ArcadePoster game={{"background_image":'./assets/poster.jpg', "description_image":"poster.jpg", "id": "1234", "name":"random_games"}}/>
        </div>
      </section>
    </div>
  );
};

export default SectionArcade;
