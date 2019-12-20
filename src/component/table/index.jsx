import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'

export default function Table({disabled,cards,flipped,handleClick,solved}) {
	return (
		<div className="c-game-table">
			{cards.map((card) => (<Card 
          id={card.id}
          key = {card.id}
          type={card.type}
          back={'facedown'}
          front={card.type}
          flipped={ flipped.includes(card.id)}
          disabled={disabled || solved.includes(card.id)}
          handleClick={(id) => handleClick(card.id)}
          solved={solved.includes(card.id)}
        />)
			)}
		</div>
		)	
}

Table.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
	solved: PropTypes.arrayOf(PropTypes.number).isRequired,
	handleClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired
}