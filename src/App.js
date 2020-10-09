import React, { useState, useEffect } from "react";
import "./App.css";
import shit from "./tesst";
import CardBoard from "./Components/Game/CardBoard";
import ScoreBoard from "./Components/Score/ScoreBoard";
import Timer from "./Components/Score/Timer";

/* PLANNED FREATURES FOR FUTURE RELEASES
MAKE ANIMATIONS THAT SAY MOVE OR MATCH
MAKE ADDITIONAL COLOR CHANGES TO SCREEN WHEN MATCH IS MADE
AUDIBLE SOUND IS MADE WITH MATCH AND FLIPPING CARD

BACKGROUND PATTERN / IMAGE ; MAYBE SOME BACKGRPOUND MUSIC
CREATE START SCREEN TO CHOOSE GENERATION AND SIZE OF GRID
HOOK APP UP TO POKEAPI TO FETCH POKE' DATA

REACT SPRING

background music
sound effects when flipping / matching
initial screen selection with difficulty / card total
make a count down timer dependant on the difficulty 
at the end of round have a point multipier for time left
blink animation on timer in scoreboard
*/

function App() {
	// slice of state for card data
	const [cards, setCards] = useState(shit);

	// slice of state to hole the maximum two selected cards
	const [currentSelected, setCurrentSelected] = useState([]);

	// slice of state to hold the most recently seleced cards name
	const [currentlySelected, setCurrentlySelected] = useState("");

	// slice of state to hold boolean for game running
	const [gameWon, setGameWon] = useState(false);

	// slice of state to hold players total score
	const [score, setScore] = useState(0);

	// after every state change cbeck current selected cards
	useEffect(() => {
		if (currentSelected.length === 2) {
			setTimeout(checkCards, 500);
		}
	}, [currentSelected]);

	// function to flip card
	const flipCard = id => {
		const newCardData = cards.map(card => {
			if (card.id === id && !card.flipped) {
				const newCard = { ...card, flipped: true };
				setCurrentSelected([...currentSelected, newCard]);
				setCurrentlySelected(card.name);
				return newCard;
			} else {
				return card;
			}
		});

		setCards(newCardData);
	};

	// fuction to check card for a match
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

	// function to check if gamne has been won
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
				<Timer currentlySelected={currentlySelected} />
				<div className="innerWrapper">
					<CardBoard cards={cards} flipCard={flipCard} />
				</div>
			</div>
		</div>
	);
}

export default App;
