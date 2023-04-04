import "../../css_files/sectionArcade_style.css";
import { useState, useEffect } from "react";

import SingleGameComment from "./SingleGameComment";
const { RAWG_API_KEY } = require("../../api-key.js");

const SingleGameDescription = ({ data, type }) => {
  const [newComment, setNewComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gameDescription, setGameDescription] = useState("");

  const handleCommentChange = (e) => {
    let comment_aux = e.target.value;
    if (comment_aux.length <= 255) {
      setNewComment(comment_aux);
    }
  };

  useEffect(() => {
    fetch(`https://rawg.io/api/games/${data.id}?token&key=${RAWG_API_KEY}`)
      .then((res) => res.json())
      .then((result) => {
        setGameDescription(result.description);
        console.log("result", result);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    async function fetchImagePosterArcade() {
      const image_aux = await import(
        `../../test_data/${data.description_image}`
      );
      setImageUrl(image_aux.default);
    }
    if (type === "arcade") {
      fetchImagePosterArcade();
    }
  }, [data.description_image, type]);

  return (
    <div className="SingleGameDescription_Wrapper">
      <div className="SingleGameTop_Wrapper">
        <div className="SingleGamePoster_Container">
          {type === "arcade" ? (
            <img src={imageUrl} alt="Game Poster" />
          ) : (
            <img src={data.background_image} alt="Game Poster" />
          )}
          <div></div>
        </div>
        <div className="SingleGameDescription_Container">
          <div className="SingleGameDescription_TitleContainer">
            <p>Title</p>
            <h4>{data.name}</h4>
          </div>
          <div className="SingleGameDescription_DescContainer">
            <p>R E L E A S E - D A T E</p>
            <h6>
              {data.released}
            </h6>
          </div>
          <div className="SingleGameDescription_DescContainer">
            <p>G E N R E</p>
            <h6>
              hola
            </h6>
          </div>
          <div className="SingleGameDescription_DescContainer">
            <p>D E S C R I P T I O N</p>
            <h6>
              {(type === "arcade") ? data.description : gameDescription}
            </h6>
          </div>
        </div>
      </div>

      {
        type === "arcade" &&
        <>
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
                <div className="AddComment_Sent">Sent</div>
                <div className="AddComment_WordCount">
                  <span>Max Char: 255 - </span>
                  <span>
                    {" "}
                    Char Count: <strong>{newComment.length}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="SingleGameComments_Wrapper">
            <h3 className="SingleGame_SubTitle">
              Comments: <span>{comments_test.length}</span>
            </h3>
            <div className="AddComment_Container CommentsSection_Container">
              {comments_test.length === 0 ? (
                <div className="NoComments_Wrapper">
                  <h5>NO COMMENTS YET</h5>
                </div>
              ) : (
                comments_test.map((comment) => {
                  return (
                    <SingleGameComment
                      key={comment.id}
                      comment={comment.comment}
                      author={comment.author}
                      date={comment.date}
                    />
                  );
                })
              )}
            </div>
          </div>
        </>
      }
    </div>
  );
};

const comments_test = [
  {
    id: 1,
    comment: "lorem ipsum",
    author: "John Doe",
    date: new Date(2022, 3, 1),
  },
  {
    id: 2,
    comment: "lorem ipsum",
    author: "John Doe",
    date: new Date(2022, 3, 1),
  },
  {
    id: 3,
    comment: "lorem ipsum",
    author: "John Doe",
    date: new Date(2022, 3, 1),
  },
];

export default SingleGameDescription;
