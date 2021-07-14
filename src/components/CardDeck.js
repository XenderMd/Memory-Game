import React,{useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Images from '../modules/ImageSet';
import CardShufler from '../modules/CardShuffler';

import Card from './Card';

const CardDeck = ({deckSize, onMovesChange, onVictory})=>{

    const [deckData, setDeckData]=useState([]);
    const [cardsHand, setCardsHand]=useState([]);
    const [movesNum, setMovesNum]=useState(0);
    const [hideCard, setHideCard]=useState(false);
    const [locked, setLocked]=useState(false);

    // Store selection
    const onCardClicked= (image,id)=>{
        const selection = {id, image};
        setCardsHand(prevCards => [...prevCards, selection].filter(selection=>selection.id!==""));
        setMovesNum((prevMoves)=>{return prevMoves+1});
    }

    // DeckData initialization
    useEffect(()=>{
        const cardNums = CardShufler(deckSize, Images);
        setDeckData(cardNums.map((cardNum)=>{return( {id:uuidv4(), image:Images[cardNum], matched:false})}));
    },[deckSize]);


    // Process selection
    // Lock the deck and do not allow the user to select other cards while the current pair is still visible
    useEffect(()=>{
        if(cardsHand.length===2){

            setLocked(true);
            setTimeout(()=>{setHideCard(true);}, 1000);

            if(cardsHand[0].image===cardsHand[1].image){

                const newDeckData = deckData.map((deckItem)=>{
                    if (deckItem.id===cardsHand[0].id || deckItem.id===cardsHand[1].id){
                        return {...deckItem, matched:true}
                    } else{
                        return deckItem;
                    }
                }); 

                const victoryFlag = newDeckData.filter((deckItem, index)=>{return !deckItem.matched}).length===0;

                if(victoryFlag){
                    console.log("Victory !!!");
                    onVictory(victoryFlag)
                }

                setDeckData(newDeckData);
            }
            setCardsHand([]);
        }        
    },[cardsHand, deckData]);


    // Unlock the deck so that the user can make a new selection pair
    useEffect(()=>{
        setTimeout(()=>{
            setHideCard(false);
            setLocked(false);
        }, 500);
    },[hideCard]);


    
    //Update the total number of moves done by the player
    useEffect(()=>{
        onMovesChange(movesNum);
    },[movesNum, onMovesChange]);




    const deck=deckData.map((dataItem)=>{
        return(
            <Card 
                image={dataItem.image} 
                id={dataItem.id} 
                matched={dataItem.matched} 
                onCardClicked={onCardClicked} 
                hideCard={hideCard} 
                locked={locked}/>
        )
    });

    return(
        <div className="cardDeck">
          {deck}
        </div>
    )

}

export default CardDeck;