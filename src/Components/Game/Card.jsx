import React, { Component } from 'react'
import { connect } from 'react-redux'
import pokecard from "../pokecard.jpg";

export const Card = (props) => {
    return (
        <div
            className="card"
            onClick={() => {
            props.flipCard(props.card.id);}}>
            <div
                className="card-inner"
                style={{ transform: props.card.flipped ? "rotateY(180deg)" : null }}>
                <div className="card-back">{props.card.value}</div>
                <div className="card-front">
                    <img src={pokecard} className="cardBack" alt="card-back"></img>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
