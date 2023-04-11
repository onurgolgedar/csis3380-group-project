import "../css_files/sectionHome_style.css";

const SectionNotFound = () => {
    return (
      <div>
        <section className="sectionHome--body Error--body" id="sectionHome">
          <div className="sectionError--mainText">
            <h1>
              Error: <span>locating the <br /><span className="errorGameShip">GameShip</span></span>
            </h1>
          </div>
        </section>
      </div>
    );
  };

  export default SectionNotFound;