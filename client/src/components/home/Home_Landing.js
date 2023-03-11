import "../../css_files/sectionHome_style.css";
import logo from "../../assets/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeLanding = () => {
    const scrollDown = () => {
        const secondDiv = document.getElementById('sectionHome_Arcade');
        const y_coord = secondDiv.getBoundingClientRect().top + window.pageYOffset - 90;
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
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" onClick={scrollDown}>
                    Arcade
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
