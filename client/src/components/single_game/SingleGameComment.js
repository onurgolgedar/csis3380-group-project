const SingleGameComment = ({ comment, date, author }) => {
  return (
    <div className="Comment_Wrapper">
      <div
        className="Comment-TopSection"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5 className="comment_author">{author}</h5>
        <button style={{ border: "none", borderRadius: "5px", padding:"5px 10px" }}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
      <h6 className="comment_date">{date.toLocaleDateString()}</h6>
      <p className="comment_text">{comment}</p>
    </div>
  );
};

export default SingleGameComment;
