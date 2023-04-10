import "../../css_files/sectionHomeArcade_style.css";
import { NavLink } from "react-router-dom";

const HomeWiki = () => {
    return (
      <div id="sectionHome_Wiki">
        <section className="sectionHome--body sectionHomeArcade--body" id="sectionHome">
          <div className="sectionHome--mainText SectionHomeArcade_content sectionHomeWiki_content">
            <div className="sectionHome_wikiTitleWrapper">
                <h1 className="sectionHome_wikiTitle">
                Wiki 
                
                </h1>
                <span style={{color:"black"}}><ion-icon name="search-outline"></ion-icon></span>
            </div>
            <div>
              <p>Get information about your favorite games</p>
              <p>Powered by RAWG API</p>
              <NavLink to="/wiki" className="homeWikiLink">
                Press to start
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default HomeWiki;