import { useSpring, animated } from 'react-spring';

const SingleGameComment = ({ author, date, content }) => {
  const aux_date = new Date(date);
  const year = aux_date.getFullYear();
  const month = (aux_date.getMonth() + 1).toString().padStart(2, '0');
  const day = aux_date.getDate().toString().padStart(2, '0');
  const formatted_date = `${month}/${day}/${year}`;

  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });

  return (
    <animated.div style={props} className="Comment_Wrapper">
      <div
        className="Comment-TopSection"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5 className="comment_author">{author}</h5>
        {/* <button style={{ border: "none", borderRadius: "5px", padding:"5px 10px" }}>
          <ion-icon name="trash-outline"></ion-icon>
        </button> */}
      </div>
      <h6 className="comment_date">{formatted_date}</h6>
      <p className="comment_text">{content}</p>
    </animated.div>
  );
};

export default SingleGameComment;
