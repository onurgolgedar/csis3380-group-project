import "../css_files/sectionHome_style.css";

const SectionHome = () => {
    return (
      <div>
        <section className="sectionHome--body" id="sectionHome">
          <div className="sectionHome--mainText">
            <h1>
              Game<span>Ship</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perferendis a aliquid quia dolorem officiis enim dicta soluta
              temporibus ipsam, accusamus laudantium nihil, eum commodi est iusto
              eaque sed repellendus. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Est autem rerum enim odit, non sint voluptate
              temporibus sed, cumque itaque tempore incidunt eum doloribus odio
              reiciendis, maiores saepe corporis magni?
            </p>
          </div>
          <div className="sectionHome--mainButton">
            <a href="#sectionArcade">Explore... </a>
          </div>
        </section>
      </div>
    );
  };

  export default SectionHome;