// Import React
import React, {Component} from 'react';
import {Route} from "react-router-dom";

// Import components
import {App} from "./App";
import {RuleOfThreeWithIntro, DiceWithIntro, PeriodicTableWithIntro} from './Intro';

class AppController extends Component {
    render() {
        return <div>
            <Route exact path={"/"} component={App}/>
            <Route path={"/ruleofthree"} component={RuleOfThreeWithIntro}/>
            <Route path={"/dice"} component={DiceWithIntro}/>
            <Route path={"/periodictable"} component={PeriodicTableWithIntro}/>
        </div>;
    }
}


export default AppController;
