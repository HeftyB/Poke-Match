import React from "react";
import Countdown, { zeroPad } from "react-countdown";

export default function Timer({ currentlySelected }) {
	return (
		<div className="timerBoard">
			{/* countdown timer` */}
			<div className="timer">
				<Countdown
					date={Date.now() + 120000}
					daysInHours={true}
					zeroPadTime={0}
				/>
			</div>
			{/* name of last selected pokemon */}
			<div className="names">{currentlySelected}</div>
		</div>
	);
}
