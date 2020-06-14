import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from "./Score";

export const ScoreBoard = (props) => {
    return (
        <div className="score-board">
            <Score score={props.score} gameWon={props.gameWon} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)
