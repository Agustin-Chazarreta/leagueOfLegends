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
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    if (card !== choiceOne) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <Wrapper>
      <H1>Magic Match</H1>
      <TurnCounter>Turnos: {turns}</TurnCounter>
      <ButtonContainer>
        <Button onClick={shuffleCards}>Nuevo Juego</Button>
      </ButtonContainer>
      <GameContainer>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            handleChoice={handleChoice}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </GameContainer>
    </Wrapper>
  );
}

export default MemoryGame;

const Wrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top left, #2e003e, #1c1c1c);
  padding: 40px 20px;
  color: white;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const TurnCounter = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 65, 108, 0.6);
  }
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
`;
