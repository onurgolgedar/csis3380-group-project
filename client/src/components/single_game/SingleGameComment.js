
const SingleGameComment = ({comment, date, author}) => {

    return (
      <div className="Comment_Wrapper">
        <h5 className="comment_author">{author}</h5>
        <h6 className="comment_date">{date.toLocaleDateString()}</h6>
        <p className="comment_text">{comment}</p>
      </div>
    );
  };

  export default SingleGameComment;