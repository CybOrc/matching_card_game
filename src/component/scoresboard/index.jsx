import React from 'react'
import PlayerScoreBar from '../PlayerScoreBar'
import './style.css'


export default function Scoreboard(players) {
	return (
		<section className="c-score-table">
			{	
			players.players.map((player) => (
				<PlayerScoreBar
		          name = {player.name}
		          key = {player.name}
		          score = {player.score}
				 />
				))
			}
		</section>
		)
}


