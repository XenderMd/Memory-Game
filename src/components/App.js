import "../css/style.css";

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


  import WelcomeScreen from "./WelcomeScreen";
  import GameScreen from "./GameScreen";
  import GameSettings from "./GameSettings";

const App = ()=>{

    return(
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomeScreen/>
                    </Route>
                    <Route path="/game/:playerName/:deckSize">
                        <GameScreen/>
                    </Route>
                    <Route path = "/settings">
                        <GameSettings/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )

}

export default App;