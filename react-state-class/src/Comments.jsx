import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comment.css";


export default function Comments() {
  let [comment, setComment] = useState([
    {
      username: "bharath",
      rating: 4,
      comments: "Not bad! one time experience",
    },
  ]);
  let getComment = ( Comment ) => {
    setComment((currComment) => [...currComment, Comment]);
    console.log("comment");
  };
  return (
    <div>
      <h2>All Comments:</h2>
<div className="boxes">
{comment.map((com, index) => (
        <div key={index} className="Comment">
          <h4>
            {com.comments} , <span>{com.rating} Stars</span>
          </h4>
          <blockquote>--{com.username}</blockquote>
        </div>
      ))}
</div>
      

      <CommentsForm addComment={getComment} />
    </div>
  );
}
