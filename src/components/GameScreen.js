import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import CardDeck from './CardDeck';
import GameScore from './GameScore';

const GameScreen = ()=>{

    const [moves, setMoves]=useState(0);
    const { playerName, deckSize } = useParams();
    const [victoryFlag, setVictoryFlag]=useState(false);

    
    return(
        <div className="gameScreen">
            <CardDeck deckSize={deckSize} onMovesChange={setMoves} onVictory={setVictoryFlag}/>
            <GameScore moves={moves} playerName={playerName} victoryFlag={victoryFlag}/>
        </div>
    )
}

export default GameScreen;