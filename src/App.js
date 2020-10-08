import React, { useState, useEffect } from "react";
import "./App.css";
import shit from "./tesst";
import CardBoard from "./Components/Game/CardBoard";
import ScoreBoard from "./Components/Score/ScoreBoard";
import Timer from "./Components/Score/Timer";

/*
MAKE ANIMATIONS THAT SAY MOVE OR MATCH
MAKE ADDITIONAL COLOR CHANGES TO SCREEN WHEN MATCH IS MADE
AUDIBLE SOUND IS MADE WITH MATCH AND FLIPPIMNG CARD

BACKGROUND PATTERN / IMAGE ; MAYBE SOME BACKGRPOUND MUSIC
SCALE GRID DEPENDENT ON SCREEN SIZE(SMALLER CARDS ON MOBILE)

REACT SPRING

background music
sound effects when flipping / matching
initial screen selection with difficulty / card total
make a count down timer dependant on the difficulty 
at the end of round have a point multipier for time left
blink animation on timer in scoreboard
*/

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
		if (firstCard.name === secondCard.name) {
			setScore(score + 1750);
			checkScore();
		} else {
			const newCards = cards.map(card => {
				if (
					card.name === firstCard.name ||
					card.name === secondCard.name
				) {
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
			<ScoreBoard gameWon={gameWon} score={score} />
			<Timer/>
				<div className="innerWrapper">
					
			{/* <h1>Poke'-Match Up!</h1>
			<h3>Find all matching pairs before time runs out!</h3> */}
					<CardBoard cards={cards} flipCard={flipCard} />
				</div>
			</div>
		</div>
	);
}

export default App;
