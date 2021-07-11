

const CardShufler = (deckSize, images)=>{

    let i=0;
    let cardNums=[];

    //Generate the deck
    while(i<deckSize){
        let selectedImage=Math.floor(Math.random()*images.length);
        cardNums.push(selectedImage);
        cardNums.push(selectedImage);
        i=i+2;
    }

    //Shufle the deck
    function shuffle(array) {
        let  m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    }

    cardNums = shuffle(cardNums);

    return cardNums;
};

export default CardShufler;