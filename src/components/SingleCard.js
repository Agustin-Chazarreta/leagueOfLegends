import React from "react";
import styled from "styled-components";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    if (!flipped) handleChoice(card);
  };

  return (
    <Card onClick={handleClick}>
      <CardInner flipped={flipped}>
        <CardFront src={card.src} alt="card front" />
        <CardBack src="/img/cover.png" alt="card back" />
      </CardInner>
    </Card>
  );
}

const Card = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardFace = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  position: absolute;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
`;

const CardBack = styled(CardFace)`
  background-color: #1e1e1e;
`;
