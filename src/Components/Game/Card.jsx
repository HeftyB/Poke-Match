import React, { Component } from "react";
import pokecard from "../pokecard.jpg";
import blankcard from "../blank-pokemon-card.png";

const Card = props => {
	return (
		<div
			className="card"
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
						<img
							src={blankcard}
							className="blank-card"
							alt="blank-card"></img>
						<div className="cardFront-innerTop">
							<img src={props.card.sprite} alt="sprite" />

							{/* {props.card.value} */}
						</div>
						<div className="cardFront-innerBottom">
							{props.card.name}
						</div>
					</div>
				</div>
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
