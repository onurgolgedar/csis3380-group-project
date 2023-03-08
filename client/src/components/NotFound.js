import "../css_files/sectionHome_style.css";

const SectionNotFound = () => {
    return (
      <div>
        <section className="sectionHome--body" id="sectionHome">
          <div className="sectionHome--mainText">
            <h1>
              Error:<span> Not Found</span>
            </h1>
          </div>
        </section>
      </div>
    );
  };

  export default SectionNotFound;