import React, { Component } from "react";
import Card from "./Card";

const CardBoard = props => {
	return (
		<div className="board">
			{/* render individual cards */}
			{props.cards.map(card => {
				return (
					<Card card={card} flipCard={props.flipCard} key={card.id} />
				);
			})}
		</div>
	);
};

export default CardBoard;
