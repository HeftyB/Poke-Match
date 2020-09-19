import React, { useState, useEffect } from "react";
import './App.css';
import shit from "./tesst";
import CardBoard from "./Components/Game/CardBoard";
import ScoreBoard from "./Components/Score/ScoreBoard";

function App() {

  const [cards, setCards] = useState(shit);
  const [currentSelected, setCurrentSelected] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (currentSelected.length === 2) {
      setTimeout(checkCards, 500);
    }
  }, [currentSelected]);

  const flipCard = id => {
    const newCardData = cards.map(card => {
      if (card.id === id && !card.flipped) {
        const newCard = { ...card, flipped: true };
        setCurrentSelected([...currentSelected, newCard]);
        return newCard;
      } else {
        return card;
      }
    });

    setCards(newCardData);
  };

  const checkCards = () => {
    const [firstCard, secondCard] = currentSelected;
    if (firstCard.value === secondCard.value) {
      setScore(score + 20);
      checkScore();
    } else {
      const newCards = cards.map(card => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          const newCard = { ...card, flipped: false };
          return newCard;
        } else {
          return card;
        }
      });
      setCards(newCards);
    }
    setCurrentSelected([]);
  };

  const checkScore = () => {
    let hasGameBeenWon = true;
    cards.forEach(card => {
      if (!card.flipped) {
        hasGameBeenWon = false;
      }
    });
    setGameWon(hasGameBeenWon);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Poke'-Match Up!</h1>
        <ScoreBoard gameWon={gameWon} score={score} />
        <CardBoard cards={cards} flipCard={flipCard} />
      </div>
    </div>
  );
}

export default App;
