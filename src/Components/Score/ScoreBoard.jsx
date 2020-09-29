import React, { Component } from "react";
import Score from "./Score";

export default function ScoreBoard(props) {
	return (
		<div className="score-board">
			<Score score={props.score} gameWon={props.gameWon} />
		</div>
	);
}
