import "../../css_files/sectionArcade_style.css";

const SingleGamePlay = ({ data }) => {
  var gameUrl =
    data.custom_url == null
      ? `https://gameship.onrender.com/public/game${data.gameCode}/index.html`
      : data.custom_url;

  return (
    <div className="SingleGamePlay_Wrapper">
      <div className="SingleGamePlay_GameContainer">
        <h3>{data.name}</h3>
        <div className="SingleGamePlay_GameScreen">
          <iframe
            src={gameUrl}
            allowFullScreen
            width={800}
            height={600}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SingleGamePlay;
