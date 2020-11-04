import React, { Component } from "react";
import pokecard from "../imgs/pokecard.jpg";
import blankcard from "../imgs/card.png";

const Card = props => {
	return (
		<div
			className="card"
			// on click flip card
			onClick={() => {
				props.flipCard(props.card.id);
			}}>
			<div
				className="card-inner"
				style={{
					transform: props.card.flipped ? "rotateY(180deg)" : null,
				}}>
				<div className="card-front">
					<div className="cardFront-inner">
						{/* front of pokemon card + sprite */}
						<img
							src={blankcard}
							className="blank-card"
							alt="blank-card"></img>
						<div className="cardFront-innerTop">
							<img src={props.card.sprite} alt="sprite" />
						</div>
					</div>
				</div>
				{/* back pf pokemon card */}
				<div className="card-back">
					<img
						src={pokecard}
						className="cardBack"
						alt="card-back"></img>
				</div>
			</div>
		</div>
	);
};
export default Card;
