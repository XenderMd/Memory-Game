import "../css/style.css";

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import WelcomeScreen from "./WelcomeScreen";

const App = ()=>{

    return(
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomeScreen/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )

}

export default App;