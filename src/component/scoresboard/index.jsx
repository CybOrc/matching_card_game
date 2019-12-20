import React from 'react'
import './style.css'


export default function Scoreboard(players) {
	return (
		<section className="c-score-table">
			{	
			players.players.map((player) => (
				<div className = 'c-score-table__row '>
				<div> {player.name} </div>
				<div> {player.score} </div>
				</div>
				))
			}
		</section>
		)
}


