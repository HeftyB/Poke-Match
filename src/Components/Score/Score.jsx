import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Score = (props) => {
    return (
        <div className="score">
        {props.gameWon ? (
          <h2 className="score-board-score winner">GOT EM ALL, YOU WIN!</h2>
        ) : (
          <h2 className="score-board-score">SCORE: {props.score}</h2>
        )}
      </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
