import "../../css_files/sectionArcade_style.css";
import Poster from "../../test_data/poster.jpg";

const SingleGameDescription = () => {
  return (
    <div className="SingleGameDescription_Wrapper">
      <div className="SingleGameTop_Wrapper">
        <div className="SingleGamePoster_Container">
          <img src={Poster} alt="Game Poster" />
        </div>
        <div className="SingleGameDescription_Container">
          <div className="SingleGameDescription_TitleContainer">
            <p>Title</p>
            {/* Test Data */}
            <h4>Pong HTML</h4>
          </div>
          <div className="SingleGameDescription_DescContainer">
            <p>Description</p>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus turpis vitae dui pretium auctor iaculis nec enim. Praesent
              ornare libero varius, sagittis enim sit amet, blandit libero.
              Phasellus eu.
            </h5>
          </div>
        </div>
      </div>
      <div className="SingleGameAddComment_Wrapper">
        <h3>Add a Comment</h3>
        <div className="AddComment_Container">

        </div>
      </div>
      <div className="SingleGameComments_Wrapper"></div>
    </div>
  );
};

export default SingleGameDescription;
