import React from 'react'
import PropTypes from 'prop-types'


export default function Player_score_bar({name,score}){
	return ( 
		<div className = 'c-score-table__row '>
			<div> {name} </div>
			<div> {score} </div>
		</div>
	)
}

Player_score_bar.propTypes = {
	name: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
}