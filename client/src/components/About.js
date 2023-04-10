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
            Hey there! Welcome to our awesome MERN stack website that we built
            for our college group project. The website is all about videogames,
            so if you're a gamer, you're going to love it. We used MongoDB,
            Express.js, React.js, and Node.js to create a super cool website
            with a sleek, modern design and tons of features that gamers will
            appreciate. We put a lot of effort into making it user-friendly, so
            it's easy to navigate and find what you're looking for. Overall,
            we're really proud of our website and we hope you enjoy using it as
            much as we enjoyed building it!
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
