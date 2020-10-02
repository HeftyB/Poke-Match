import React, { Component } from "react";
import Card from "./Card";

const CardBoard = props => {
	return (
		<div className="board">
			{/* <div className="rubberBand">Pick a match</div> */}
			{props.cards.map(card => {
				return (
					<Card card={card} flipCard={props.flipCard} key={card.id} />
				);
			})}
		</div>
	);
};

export default CardBoard;
