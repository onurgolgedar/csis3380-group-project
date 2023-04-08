import "../../css_files/sectionArcade_style.css";

const SingleGamePlay = ({data}) => {
    return (
      <div className="SingleGamePlay_Wrapper">
        <div className="SingleGamePlay_GameContainer">
          <h3>
            {data.name}
          </h3>
          <div className="SingleGamePlay_GameScreen">
            Game goes here
          </div>
        </div>
      </div>
    );
  };

  export default SingleGamePlay;