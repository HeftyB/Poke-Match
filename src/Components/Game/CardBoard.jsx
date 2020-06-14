import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card';

export const CardBoard = (props) => {
    return (
        <div className="board">
        {props.cards.map(card => {
          return <Card card={card} flipCard={props.flipCard} key={card.id} />;})}
      </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CardBoard)
