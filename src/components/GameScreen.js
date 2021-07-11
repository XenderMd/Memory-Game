import React from 'react';

import CardDeck from './CardDeck';
import GameScore from './GameScore';

const GameScreen = ()=>{

    return(
        <div className="gameScreen">
            <CardDeck deckSize={20}/>
            <GameScore/>
        </div>
    )
}

export default GameScreen;