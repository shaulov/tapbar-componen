import { useState } from "react";
import "./tapbar-buttons.css";

export function FavoriteButton() {
  const [likes, setLikes] = useState(28);

  const handleClick = () => {
    setLikes(prev => prev + 1);
  }

  return (
    <button className="tapbar-button" onClick={handleClick}>
      <img src="/images/icons/heart.svg" width="20" height="18" alt="" />
      <span className="tapbar-button--text">{likes}</span>
    </button>
  );
}