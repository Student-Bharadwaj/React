import { useState } from "react";
export default function Likebutton() {
  let [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
    
    
  }
  let iconStyles = { color: "red" };
  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={iconStyles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}

      </p>

    </div>
  );
}
