import React, {Component} from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import RuleOfThree from '../components/RuleOfThree.js';
import Dice from '../components/Random.js';

class RuleOfThreeWithIntro extends Component {
    render() {
        return <div className={"RuleOfThreeWithIntro"}>
            <h3>
                Dreisatz
                <small> :RuleOfThree</small>
            </h3>
            <p className={"text-muted"}>
                Weitere Information zum Dreisatz gibt es bei <a
                href={"https://www.frustfrei-lernen.de/mathematik/dreisatz-rechnen-proportional.html"}>
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
        </div>;
    }
}

class DiceWithIntro extends Component {
    render() {
        return <div className={"DiceWithIntro"}>
            <h3>
                Würfelsimulation
                <small> :Dice</small>
            </h3>
            <p className={"text-muted"}>
                Der ultimative Würfel!
            </p>
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
        </div>;
    }
}

class App extends Component {
    componentDidMount() {
        $(document).ready(function () {
            console.log("INIT COLLAPBSIBLE");
            $('.collapsible').collapsible();
        });
    }

    render() {

        return (
            <div className="App">
                <nav>
                    <div className={"nav-wrapper blue-grey darken-4"}>
                        <a className={"brand-logo"} href={"#!"}>
                            EduTools
                        </a>
                    </div>
                </nav>
                <main className="App-main">
                    <h3>Was ist das – EduTools?</h3>
                    <blockquote>
                        Oft will man „einfach“ nur mal kurz den Notendurchschnitt für das
                        nächste Zeugnis ausrechnen oder ein Walter-Lieth-Klimadiagramm erstellen.
                        Und genau das ist das, was wir versuchen.
                        Einfache Werkzeuge bereitzustellen, um komplexe Aufgaben zu erledigen.<br/>
                        <i className={"right"}>– Jonathan Weth</i>
                    </blockquote>

                    <h3>Was bieten wir?</h3>
                    <h4>Allgemein</h4>
                    Notendurchschnitt
                    <h4>Mathematik</h4>
                    <ul className={"collapsible"}>
                        <li>
                            <div className={"collapsible-header"}>
                                Dreisatz
                            </div>
                            <div className={"collapsible-body"}>
                                <RuleOfThreeWithIntro/>
                            </div>
                        </li>
                        <li>
                            <div className={"collapsible-header"}>
                                Würfelsimulation
                            </div>
                            <div className={"collapsible-body"}>
                                <DiceWithIntro/>
                            </div>
                        </li>
                    </ul>


                </main>
                <footer className="page-footer blue-grey">
                    <div className="footer-copyright">
                        <div className="container">
                            © 2018 by Jonathan Weth
                            <a className="grey-text text-lighten-4 right"
                               href="mailto:hansegucker@gmail.com">hansegucker@gmail.com</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
