import React from 'react';


const MovesDisplay = ({moves, playerName, victoryFlag})=>{

    return(
        <div className = "movesDisplay">
            <label className = "movesDisplay__PlayerName" >{playerName?playerName:"Player"}</label>
            <div className ="movesDisplay__value" >{moves}</div>
            {victoryFlag?"Congratulations, you won !!!":""}
        </div>
    )

}

export default MovesDisplay;