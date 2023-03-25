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
        <h3 className="SingleGame_SubTitle">Add a Comment</h3>
        <div className="AddComment_Container">
          <textarea
            id="comment_input"
            rows="4"
            placeholder="Share your thoughts..."
          ></textarea>
          <div className="AddComment_BottomWrapper">
            <div className="AddComment_Sent">
              Sent
            </div>
            <div className="AddComment_WordCount">
              <span>Max Words: 100 - </span>
              <span> Word Count: </span>
            </div>
          </div>
        </div>
      </div>
      <div className="SingleGameComments_Wrapper">
        <h3 className="SingleGame_SubTitle">Comments</h3>
        <div className="CommentsSection_Container">
          
        </div>
      </div>
    </div>
  );
};

export default SingleGameDescription;
