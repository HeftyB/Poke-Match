import React, { Component } from "react";

export default function Score(props) {
	return (
		<div className="score">
			{/* RENDER GAME WON MESSAGE OR SCORE */}
			{props.gameWon ? (
				<h2 className="score-board-score winner">
					GOT EM ALL, YOU WIN!
				</h2>
			) : (
				<h2 className="score-board-score">SCORE:{props.score}</h2>
			)}
		</div>
	);
}
