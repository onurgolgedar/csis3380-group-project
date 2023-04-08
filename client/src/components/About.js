import "../css_files/sectionAbout_style.css";

const SectionAbout = () => {
  return (
    <div>
      <section className="sectionAbout--body" id="sectionAbout">
        <div className="sectionAbout--mainText">
          <h2>
            About<span>Us</span>
          </h2>
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
        <div className="sectionAbout--teamContent">
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Onur Gölgedar </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              debitis iusto facilis dolores nisi culpa reiciendis minus sapiente
              ad delectus, distinctio quas quod, totam suscipit? Porro id maxime
              sint totam!
            </p>
            <a href="/#" className="sectionAbout--links">
              See More
            </a>
          </div>
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Jerry Pena Alfaro </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              debitis iusto facilis dolores nisi culpa reiciendis minus sapiente
              ad delectus, distinctio quas quod, totam suscipit? Porro id maxime
              sint totam!
            </p>
            <a href="/#" className="sectionAbout--links">
              See More
            </a>
          </div>
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Lovepreet Singh </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              debitis iusto facilis dolores nisi culpa reiciendis minus sapiente
              ad delectus, distinctio quas quod, totam suscipit? Porro id maxime
              sint totam!
            </p>
            <a href="/#" className="sectionAbout--links">
              See More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionAbout;
