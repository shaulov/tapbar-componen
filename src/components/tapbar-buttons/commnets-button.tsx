import { useState } from "react";
import "./tapbar-buttons.css";

export function CommentsButton() {
  const [commnets, setCommnets] = useState(7);

  const handleClick = () => {
    setCommnets(prev => prev + 1);
  }

  return (
    <button className="tapbar-button" onClick={handleClick}>
      <img src="./images/icons/comments.svg" width="18" height="19" alt="" />
      <span  className="tapbar-button--text">{commnets}</span>
    </button>
  );
}