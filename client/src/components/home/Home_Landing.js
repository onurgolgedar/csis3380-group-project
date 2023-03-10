import "../../css_files/sectionHome_style.css";
import logo from "../../assets/Logo.png"

const HomeLanding = () => {
  return (
    <div>
      <section className="sectionHome--body" id="sectionHome">
        <div className="sectionHome--mainText">
          <div className="sectionHome--LogoWrapper">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="sectionHome--ContentWrapper">
            <h1>
              Game<span>Ship</span>
            </h1>
            <p>
              PLAY and MORE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLanding;
