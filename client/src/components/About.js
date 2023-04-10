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
            x
          </p>
        </div>
        <div className="sectionAbout--teamContent">
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Onur Gölgedar </h3>
            <p>
              I have over ten years of software development expertise and am both a gamer and game creator. I'm really passionate about video games and the gaming community. Video games, in my opinion, are an outstanding type of entertainment that provide players with fresh inspiration, challenges, and enjoyment.
            </p>
          </div>
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Jerry Pena Alfaro </h3>
            <p>
              
            </p>
          </div>
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Lovepreet Singh </h3>
            <p>
              
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionAbout;
