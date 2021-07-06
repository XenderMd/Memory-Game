import angularImage from '../img/cards/splendex.png';

import React, {useState} from 'react';

const Card = ()=>{

    const [rotated, setRotated]=useState(false);

    const onSideClicked = ()=>{
        setRotated(!rotated);
    }

    return(
        <div className="card">
            <div onClick={onSideClicked} className={`card__side card__side--1 card__side--${rotated?"back":"front"}`}></div>
            <div onClick={onSideClicked} className={`card__side card__side--2 card__side--${rotated?"front":"back"}`}>
                <img className="card__image" src={angularImage} alt="card picture" ></img>
            </div>
        </div>
    )
    
}

export default Card;