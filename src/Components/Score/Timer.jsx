import React from 'react'
import Countdown from "react-countdown"

export default function Timer() {
    return (
        <div className="timerBoard">
            <div className="timer">
                <Countdown date={Date.now() + 120000}/>
            </div>
            Pokemon's Name
        </div>
    )
}
