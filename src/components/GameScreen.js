import React from 'react';

import CardDeck from './CardDeck';
import GameScore from './GameScore';

const GameScreen = ()=>{

    return(
        <div className="gameScreen">
            <CardDeck/>
            <GameScore/>
        </div>
    )
}

export default GameScreen;