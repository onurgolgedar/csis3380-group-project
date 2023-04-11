import SingleGameComment from "./SingleGameComment";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

import axios from "axios";
axios.defaults.withCredentials = true;

const SingleGameCommentSection = ({ comments, handleRetrieveComments, gameId }) => {
  const [newComment, setNewComment] = useState("");
  const [showCommentAlert, setShowCommentAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCommentChange = (e) => {
    let comment_aux = e.target.value;
    if (comment_aux.length <= 255) {
      setNewComment(comment_aux);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.length === 0) {
      setAlertMessage("Please make sure you write something on your comment");
      setShowCommentAlert(true);
    } else {
      handlePostComment();
    }
  };

  const scrollDown = (element_id) => {
    const div = document.getElementById(element_id);
    const y_coord = div.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y_coord, behavior: "smooth" });
  };

  const handlePostComment = async () => {
    try {
      await axios
        .post(
          `https://gameship.onrender.com/api/gamereviews/${gameId}`,
          {
            comment_text: newComment
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if(response.data.error) {
            setAlertMessage("Please Log In to Comment");
            setShowCommentAlert(true);
          } else {
            scrollDown("comment_SectionId");
            setShowCommentAlert(false);
            setNewComment("");
            handleRetrieveComments();
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div id="comment_section" className="SingleGameAddComment_Wrapper">
        <h3 className="SingleGame_SubTitle">Add a Comment</h3>
        <div className="AddComment_Container">
          {showCommentAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowCommentAlert(false)}
              dismissible
            >
              <Alert.Heading>Error</Alert.Heading>
              <p>{alertMessage}</p>
            </Alert>
          )}
          <textarea
            id="comment_input"
            rows="4"
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
          <div className="AddComment_BottomWrapper">
            <button
              className="AddComment_Sent"
              style={{ border: "none" }}
              onClick={handleCommentSubmit}
            >
              Sent
            </button>
            <div
              className="AddComment_WordCount"
              style={{ textAlign: "center" }}
            >
              <span style={{ color: "black" }}>Max Char: 255 - </span>
              <span style={{ color: "black" }}>
                {" "}
                Char Count: <strong>{newComment.length}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="comment_SectionId" className="SingleGameComments_Wrapper">
        <h3 className="SingleGame_SubTitle">
          Comments: <span>{comments.length}</span>
        </h3>

        

        <div className="AddComment_Container CommentsSection_Container">
          {comments.length === 0 ? (
            <div className="NoComments_Wrapper">
              <h5>NO COMMENTS YET</h5>
            </div>
          ) : (
            comments.map((comment, index) => {
              return (
                <SingleGameComment
                  key={comment._id}
                  // index={index}
                  author={comment.author_username}
                  date={comment.date}
                  content={comment.text}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

// const comments_test = [
//   {
//     id: 1,
//     comment: "lorem ipsum",
//     author: "John Doe",
//     date: new Date(2022, 3, 1),
//   },
//   {
//     id: 2,
//     comment: "lorem ipsum",
//     author: "John Doe",
//     date: new Date(2022, 3, 1),
//   },
//   {
//     id: 3,
//     comment: "lorem ipsum",
//     author: "John Doe",
//     date: new Date(2022, 3, 1),
//   },
// ];

export default SingleGameCommentSection;
