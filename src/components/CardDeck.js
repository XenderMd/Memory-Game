import React from 'react'

import images from '../modules/ImageSet';

import Card from './Card';

const CardDeck = ()=>{

    const deck =images.map((image)=>{
        return(<Card image={image}/>)
    })

    return(
        <div className="cardDeck">
          {deck}
        </div>
    )

}

export default CardDeck;