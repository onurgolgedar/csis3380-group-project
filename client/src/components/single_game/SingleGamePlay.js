import "../../css_files/sectionArcade_style.css";

const SingleGamePlay = ({ data }) => {
  var gameUrl = `http://127.0.0.1:7000/public/game${data.gameCode}/index.html`; //"https://cdn.htmlgames.com/AllThreesDomino/"

  return (
    <iframe src={gameUrl} allowFullScreen width={800} height={600}></iframe>
  );
};

export default SingleGamePlay;