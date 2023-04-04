import "../../css_files/sectionHome_style.css";
import logo from "../../assets/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeLanding = () => {
    const scrollDown = (element_id) => {
        const div = document.getElementById(element_id);
        const y_coord = div.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y_coord, behavior: 'smooth' });
      };

  return (
    <div>
      <section className="sectionHome--body" id="sectionHome">
        <div className="sectionHome--mainText">
          <div className="sectionHome--LogoWrapper">
            <img src={logo} alt="Logo" />
          </div>
          <div className="sectionHome--ContentWrapper">
            <h1>
              Game<span>Ship</span>
            </h1>
            <p>PLAY and MORE</p>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" onClick={() => scrollDown("sectionHome_Arcade")}>
                    A r c a d e
                  </a>
                  <a className="dropdown-item" onClick={() => scrollDown("sectionHome_Wiki")}>
                    W i k i
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLanding;
