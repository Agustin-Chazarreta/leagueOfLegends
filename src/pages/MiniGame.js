import { useEffect, useState } from "react";

import SingleCard from "../components/SingleCard";
import styled from "styled-components";
const cardImages = [
  { src: "/img/summonerignite.png", matched: false },
  { src: "/img/summoner_teleport.png", matched: false },
  { src: "/img/summoner_smite.png", matched: false },
  { src: "/img/summoner_haste.png", matched: false },
  { src: "/img/summoner_flash.png", matched: false },
  { src: "/img/summoner_exhaust.png", matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="memory-field">
      <H1>Magic Match</H1>
      <Button onClick={shuffleCards}>New Game</Button>
      <Div>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            handleChoice={handleChoice}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          ></SingleCard>
        ))}
      </Div>
    </div>
  );
}

export default MemoryGame;

const Button = styled.button`
  background: none;
  border: 2px solid #fff;
  padding: 6px 12px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  :hover {
    background: #c23866;
    color: #fff;
  }
`;

const Div = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
`;
