import React,{useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Images from '../modules/ImageSet';
import CardShufler from '../modules/CardShuffler';

import Card from './Card';

const CardDeck = ({deckSize})=>{

    const [deck, setDeck]=useState([]);
    const [selection, setSelection]=useState({
        id:'',
        image:''
    });
    const [cardsHand, setCardsHand]=useState([]);

    const onCardClicked= (image,id)=>{
        setSelection({id, image});
    }

    //Deck initialization
    useEffect(()=>{
        const cardNums = CardShufler(deckSize, Images);
        setDeck(cardNums.map((cardNum)=>{return(<Card image={Images[cardNum]} id={uuidv4()} onCardClicked={onCardClicked}/>);}));
    },[deckSize]);

    //Record and store selection
    useEffect(()=>{
        setCardsHand(prevCards => [...prevCards, selection].filter(selection=>selection.id!==""));
    },[selection]);


    //Process selection
    useEffect(()=>{
        console.log(cardsHand);
    },[cardsHand]);


    return(
        <div className="cardDeck">
          {deck}
        </div>
    )

}

export default CardDeck;