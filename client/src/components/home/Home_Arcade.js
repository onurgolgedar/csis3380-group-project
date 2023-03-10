import "../../css_files/sectionHomeArcade_style.css";
import { NavLink } from "react-router-dom";

const HomeArcade = () => {
    return (
      <div id="sectionHome_Arcade">
        <section className="sectionHome--body sectionHomeArcade--body" id="sectionHome">
          <div className="sectionHome--mainText SectionHomeArcade_content">
            <div className="ArcadeTitleWrapper">
              <h1 className="sectionHomeArcade--Title">
                Arcade
              </h1>
              <NavLink to="/arcade" className="homeArcadeLink">
                Press to start
              </NavLink>
            </div>
            <div>
              <p>Start a journey</p>
              <p>Enjoy our catalogue of games</p>
              <p>Get the higher scores</p>
              <p>Share your thoughts</p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default HomeArcade;