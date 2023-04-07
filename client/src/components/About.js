import "../css_files/sectionAbout_style.css";

const SectionAbout = () => {
  return (
    <div>
      <div id="grid">
        <div id="left" className="template-area">
          <h2>Hints</h2>
          Ball may not bounce as expected!
        </div>
        <div id="game" className="template-area">
          <h2 id="title">Flash Hockey</h2>
          <div className="gm4html5_div_class" id="gm4html5_div_id">
            <canvas id="canvas" width="500" height="400">
              <p>Your browser doesn't support HTML5 canvas.</p>
            </canvas>
          </div>
        </div>
        <div id="gameDesc" className="template-area">
          <h2 id="title">Game Description</h2>
          Player 1 uses Left and Right arrows.<br />
          Player 2 uses 'A' and 'D' keys.
        </div>
        <div id="right" className="template-area">
          <h2>Metadata</h2>
          <p id="gameInfo">
            Created on 6/4/2023<br />Created by Group 7<br />Created with
            GMS2
          </p>
        </div>
      </div>

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