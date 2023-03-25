import "../../css_files/sectionArcade_style.css";
import Poster from "../../test_data/poster.jpg";
import {useState} from "react";

import SingleGameComment from "./SingleGameComment";

const SingleGameDescription = () => {

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    let comment_aux = e.target.value;
    if(comment_aux.length <= 255) {
      setNewComment(comment_aux);
    }
  };

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
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
          <div className="AddComment_BottomWrapper">
            <div className="AddComment_Sent">
              Sent
            </div>
            <div className="AddComment_WordCount">
              <span>Max Char: 255 - </span>
              <span> Char Count: <strong>{newComment.length}</strong></span>
            </div>
          </div>
        </div>
      </div>
      <div className="SingleGameComments_Wrapper">
        <h3 className="SingleGame_SubTitle">Comments: <span>{comments_test.length}</span></h3>
        <div className="AddComment_Container CommentsSection_Container">
          {
            comments_test.length === 0 ?
              <div className="NoComments_Wrapper"> 
                <h5>NO COMMENTS YET</h5>
              </div>
              :
              comments_test.map((comment) => {
                return <SingleGameComment key={comment.id} comment={comment.comment}
                  author={comment.author} date={comment.date}/>
              })
          }
        </div>
      </div>
    </div>
  );
};

const comments_test = [
 {
  id: 1,
  comment: "lorem ipsum",
  author: "John Doe",
  date: new Date(2022,3,1)
 },
 {
  id: 2,
  comment: "lorem ipsum",
  author: "John Doe",
  date: new Date(2022,3,1)
 },
 {
  id: 3,
  comment: "lorem ipsum",
  author: "John Doe",
  date: new Date(2022,3,1)
 }
]

export default SingleGameDescription;
