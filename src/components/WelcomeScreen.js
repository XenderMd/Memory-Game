import React from 'react';

import Button from './Button';

const WelcomeScreen = ()=>{

    return(
        <div className="welcomeScreen">
            
            <div className="welcomeScreen__text-box">
                <h1 className="heading-primary heading-primary__main">The Memory Game</h1>
                <h2 className="heading-primary heading-primary__sub">A game where you will be tested</h2>
            </div>

            <Button className="btn btn--white u-margin-top-big" to = "/settings">Continue</Button>
        </div>
    )

}

export default WelcomeScreen;