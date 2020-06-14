import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from "./Score";

export const ScoreBoard = (props) => {
    const { totalScore, endGame } = props
    return (
        <div className="score-board">
            <Score score={totalScore} gameWon={endGame} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalScore: state.totalScore,
    endGame: state.endGame
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)
