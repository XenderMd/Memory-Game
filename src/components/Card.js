import React, {useEffect, useState} from 'react';

const Card = ({image,id,onCardClicked, hideCard, locked, matched})=>{

    const [rotated, setRotated]=useState(false);

    const onSideClicked = ()=>{

        //If the cards were locked or already matched, do nothing
        if(!locked && !matched){
            onCardClicked(image,id);
            setRotated(!rotated);
        }
        
    }

    useEffect(()=>{

        if(hideCard){
            setRotated(false);
        }

    },[hideCard]);

    return(
        <div className="card">
            <div onClick={onSideClicked} className={`card__side card__side--1 card__side--${!rotated?"front":"back"} ${matched?"card__side--matched":""}`}></div>
            <div className={`card__side card__side--2 card__side--${rotated?"front":"back"}`}>
                <img className="card__image" src={image} alt="card picture" ></img>
            </div>
        </div>
    )
    
}

export default Card;