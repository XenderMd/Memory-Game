import React from 'react';

import Button from "./Button";
import MovesDisplay from './MovesDisplay';


const GameScore = ({moves, playerName, victoryFlag})=>{

    return(
        <div className="gameScore">
            <MovesDisplay moves={moves} playerName={playerName} victoryFlag={victoryFlag}/>
            <Button className="btn btn--white" to = "/">Back</Button>
        </div>
    )

}

export default GameScore;