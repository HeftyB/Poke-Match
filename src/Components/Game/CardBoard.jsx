import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card';
import { flipCard } from "../../store/actions"

export const CardBoard = (props) => {
  const { cards, flipCard } = props;
    return (
        <div className="board">
        {cards.map(card => {
          return <Card card={card} flipCard={flipCard} key={card.id} />;})}
      </div>
    )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
})

const mapDispatchToProps = {
  flipCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CardBoard)
