import React,{useState} from 'react';

import Button from './Button';


const GameSettings = ()=>{

    const[playerName, setPlayerName]=useState("");
    const [deckSize, setDeckSize] = useState();


    return(

        <div className="gameSettings">
            

            <div className = "gameSettings__form">

                <input className = "gameSettings__form--input"  type="text" placeholder="Player Name" value={playerName} onChange={(event)=>{setPlayerName(event.target.value)}}></input>

                <input className = "gameSettings__form--input" type="number" placeholder = "Deck Size" value={deckSize} onChange={(event)=>{setDeckSize(event.target.value)}} ></input>

            </div>

            <Button className="btn btn--white u-margin-top-big" to = {`/game/${playerName}/${deckSize}`}>Start Game</Button>

        </div>
    )
}

export default GameSettings;