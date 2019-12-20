import React from 'react'
import PropTypes from 'prop-types'
import './style.css'


export default function Card({disabled,handleClick,id,flipped,back,front,player,type,solved}){
	return <div
	className = {'c-card__container '+ (flipped ? front : back ) +' '+ (solved ? 'solved' : '')}
	onClick = {() =>disabled ? null : handleClick(id)}
	>

		<div className ='Flipper'>
			
		</div>
	</div>
}

Card.propTypes = {
	handleClick: PropTypes.func.isRequired,
	disabled:PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	flipped: PropTypes.bool.isRequired,
	back: PropTypes.string.isRequired,
	front: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	solved: PropTypes.bool.isRequired
}