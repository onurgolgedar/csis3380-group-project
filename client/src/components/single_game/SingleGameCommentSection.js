import SingleGameComment from "./SingleGameComment";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const SingleGameCommentSection = () => {
  const [newComment, setNewComment] = useState("");
  const [showCommentAlert, setShowCommentAlert] = useState(false);

  const handleCommentChange = (e) => {
    let comment_aux = e.target.value;
    if (comment_aux.length <= 255) {
      setNewComment(comment_aux);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if(newComment.length === 0) {
        setShowCommentAlert(true)
    } else {
        setShowCommentAlert(false)
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
              <Alert.Heading>Comment Error</Alert.Heading>
              <p>
                Please make sure you write something on your comment
              </p>
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

export default SingleGameCommentSection;
