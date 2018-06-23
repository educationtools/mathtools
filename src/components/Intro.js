// Import React
import React, {Component} from "react";
//import {Link} from "react-router-dom";

// Import components
import RuleOfThree from '../components/RuleOfThree.js';
import Dice from '../components/Random.js';
import PeriodicTable from "./PeriodicTable";

// Import jQuery
// import $ from 'jquery/dist/jquery.js';

// Import structure
import {Header, Footer} from "./AppStructure";


class RuleOfThreeWithIntro extends Component {
    render() {
        return <div className={"RuleOfThreeWithIntro"}>
            <Header/>
            <main>
                <h3>
                    Dreisatz
                    <small> :RuleOfThree</small>
                </h3>
                <p>
                    Weitere Information zum Dreisatz gibt es bei
                    <a href={"https://www.frustfrei-lernen.de/mathematik/dreisatz-rechnen-proportional.html"}>
                        „Frustfrei lernen“
                    </a>!
                </p>
                <p className={"flow-text"}>
                    Der Dreisatz – wer kennt ihn nicht aus dem Matheunterricht.
                    Doch manchmal benötigt man ihn nur kurz, um kleine Dinge zu berechnen.
                    Da hilft einem ein Onlinetool weiter:&nbsp;
                    <strong>Einfach ausfüllen und das Ergebnis erscheint sofort!</strong>
                </p>
                <blockquote>
                    <strong>Kleiner Tipp: </strong>Du kannst mit <kbd>TAB</kbd> ganz einfach zwischen den Feldern
                    wechseln. Einfach mal ausprobieren!
                </blockquote>
                <RuleOfThree/>
            </main>
            <Footer/>
        </div>;
    }
}

class DiceWithIntro extends Component {
    render() {
        return <div className={"DiceWithIntro"}>
            <Header/>
            <main>
                <h3>
                    Würfelsimulation
                    <small> :Dice</small>
                </h3>
                <p className={"flow-text"}>
                    <strong>10.000-mal würfeln?</strong> Das schafft nur der Computer. Um gute Ergebnisse für
                    Aufgaben in Stochastik und Wahrscheinlichkeitsrechnung zu bekommen, reicht ein normaler
                    Computer, ein Browser und diese Website.
                </p>
                <blockquote>
                    <strong>Kleiner Tipp: </strong>Wenn du willst, dass nicht weiter gewürfelt wird, deaktiviere das
                    Würfeln mit dem Schalter:
                </blockquote>
                <Dice/>
            </main>
            <Footer/>
        </div>;
    }
}

class PeriodicTableWithIntro extends Component {
    render() {
        return <div className={"PeriodicTableWithIntro"}>
            <Header/>
            <main>
                <h3>
                    Periodensystem der Elemente
                    <small> :PeriodicTable</small>
                </h3>
                <p className={"flow-text"}>
                    <strong>10.000-mal würfeln?</strong> Das schafft nur der Computer. Um gute Ergebnisse für
                    Aufgaben in Stochastik und Wahrscheinlichkeitsrechnung zu bekommen, reicht ein normaler
                    Computer, ein Browser und diese Website.
                </p>
                <blockquote>
                    <strong>Kleiner Tipp: </strong>Wenn du willst, dass nicht weiter gewürfelt wird, deaktiviere das
                    Würfeln mit dem Schalter:
                </blockquote>
                <PeriodicTable/>
            </main>
            <Footer/>
        </div>;
    }
}


export {RuleOfThreeWithIntro, PeriodicTableWithIntro, DiceWithIntro};
