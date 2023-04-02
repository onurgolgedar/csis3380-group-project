// import "../css_files/sectionHome_style.css";
import HomeArcade from "./home/Home_Arcade"
import HomeLanding from "./home/Home_Landing"
import HomeWiki from "./home/Home_Wiki"

const SectionHome = () => {
    return (
      <>
        <HomeLanding />
        <HomeArcade />
        <HomeWiki />
      </>
    );
  };

  export default SectionHome;