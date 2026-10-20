import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p onDoubleClick={toggleLike}>
        {isLiked ? (
          <i className="fa-regular fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
