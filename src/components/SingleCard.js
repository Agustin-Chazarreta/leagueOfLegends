import React from "react";
import "../App.css";
export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card-memory">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        ></img>
      </div>
    </div>
  );
}
