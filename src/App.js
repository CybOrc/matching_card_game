import React, {useState,useEffect} from 'react';
import './App.css';
import Table from './component/table';

import initializeDeck from './component/deck';
import Scoreboard from './component/scoresboard';


function App() {

  const [flipped,setFlipped] = useState([])
  const [cards, setCards] = useState([])
  const [turn,setTurn] = useState(true)

  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  const [players,setPlayers] = useState([{name: 'Player1',score:0,id:0,active:true,winner:false,key:1},{name: 'Player2',score:0,id:1,active:false,winner:false,key:2}])

  const [winMessage,setWinMessage] = useState([])
  const [active,setActive] = useState(false)
 

  useEffect(()=> {
    setCards(initializeDeck())
  },[])

  const handleClick = (id)=> {
      if (flipped.length === 0 ) {
      setFlipped([id])
      setDisabled(false)
    } else  {

      if(sameCardClicked(id)) return
      setDisabled(true)
      setFlipped([flipped[0],id])

      if (cardsMatch(id)) {
        setTimeout(resetCards,1000)
      } else {
        setTurn(!turn)
        setTimeout(resetCards,1000)
      }

    }
  }

  const resetApp = () => {
    setCards(initializeDeck())
    setPlayers([{name: 'Player1',score:0,id:0,winner:false,key:1},{name: 'Player2',score:0,id:1,winner:false,key:2}])
    setFlipped([])
    setSolved([])
    setActive(false) 
  }

  const resetCards =() => {      
        setFlipped([])
        setDisabled(false)
    }

  const cardsMatch = (id) => {
   const firstCard = cards.find((card) => card.id === flipped[0])
   const secondCard = cards.find((card) => card.id === id )
   if (firstCard.type === secondCard.type) {
    setSolved([...solved,secondCard.id,firstCard.id])
    changeScore(turn)
    endGame(solved.length)
    return true 
   } 
  }

  const sameCardClicked = (id) => flipped.includes(id)



  const changeScore = (turn) => {
    var index = turn ? 0 : 1
    const player = players.find((player) => player.id === index)
    const newScore = (player.score + 1)
    player.score = newScore
    players[index] = player
    setPlayers(players)
  }

  const printWinner = () => {
    const player1 = players.find((player) => player.id === 0)
    const player2 = players.find((player) => player.id === 1)
    if(player1.score === player2.score) {
      return ('Its a draw! Play again?')
    }else if (player1.score > player2.score){
      return ('Player 1 Wins! Play again?')
    } else {
      return ('Player 2 Wins! Play Again?')
    }
  }

  const endGame = (solvedCards) => {
    if (solvedCards === 18) {
      setWinMessage(printWinner())
      setActive(true)     
    }
  }
  

  return (
    <main className='c-main' >
      <header>
        <Scoreboard 
          players = {players}
        />
      </header>
      <Table 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled = {disabled}
        solved ={solved}
      /> 
      <div className={active ? 'c-modal-active' : 'c-modal'} >
        <h1>{winMessage}</h1>
        <a className="c-modal__button" onClick={resetApp} > Yes! </a>
      </div>
    </main>
  );
}

export default App;
