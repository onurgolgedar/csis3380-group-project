import "../css_files/sectionAbout_style.css";

const SectionAbout = () => {
  return (
    <div>
      <section className="sectionAbout--body" id="sectionAbout">
        <div className="sectionAbout--mainText">
          <h2>
            About<span>Us</span>
          </h2>
          <p style={{ textAlign: "left" }}>
            Welcome to our awesome MERN stack website that we built for our
            college group project. The website is about videogames, so if you're
            a gamer, you're going to love it. We used MongoDB, Express.js,
            React.js, and Node.js to create a super cool website with a sleek,
            modern design and tons of features that gamers will appreciate. We
            put a lot of effort into making it user-friendly, so it's easy to
            navigate and find what you're looking for. Overall, we're really
            proud of our website and we hope you enjoy using it.
          </p>
        </div>
        <div className="sectionAbout--teamContent">
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Onur Gölgedar </h3>
            <p>
              I have over ten years of software development expertise and am
              both a gamer and game creator. I'm really passionate about video
              games and the gaming community. Video games, in my opinion, are an
              outstanding type of entertainment that provide players with fresh
              inspiration, challenges, and enjoyment.
            </p>
          </div>
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Jerry Pena Alfaro </h3>
            <p>
              I love the challenge and creativity involved in
              coding and how fun is gaming to relax. I believe that both
              programming and gaming offer endless possibilities for exploration
              and growth, and I'm excited to see where my interests take me in
              the future.
            </p>
          </div>
          <div className="sectionAbout--boxContent">
            <div className="sectionAbout--iconContent">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h3> Lovepreet Singh </h3>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionAbout;
