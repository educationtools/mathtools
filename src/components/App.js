import React, {Component} from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import RuleOfThree from '../components/RuleOfThree.js';
import Dice from '../components/Random.js';
import {Route, Link} from "react-router-dom";

class Header extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
    }

    render() {
        return <header>
            <nav>
                <a href="#!" data-activates="slide-out" className="button-collapse hide-on-large-only">
                    <i className="material-icons">menu</i>
                </a>
                <div className={"nav-wrapper blue-grey darken-4"}>
                    <Link className={"brand-logo"} to={"/"}>
                        EduTools
                    </Link>
                </div>
            </nav>
            <ul id="slide-out" className="side-nav fixed">
                <li><Link to={"/"}><i className={"material-icons"}>home</i> Startseite</Link></li>
                <li>
                    <div className={"divider"}></div>
                </li>
                <li>
                    <a className={"subheader"}>
                        Mathematik
                    </a>
                </li>
                <li>
                    <Link to={"/ruleofthree"}>Dreisatz</Link>
                </li>
                <li>
                    <Link to={"/dice"}>Würfelsimulation</Link>
                </li>
            </ul>

        </header>;
    }
}

class Footer extends Component {
    render() {
        return <footer className="page-footer blue-grey">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 by Jonathan Weth
                    <a className="grey-text text-lighten-4 right"
                       href="mailto:hansegucker@gmail.com">hansegucker@gmail.com</a>
                </div>
            </div>
        </footer>;
    }
}

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
            </main>
            <Footer/>
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
                <Header/>
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
                    <ul className={"collection"}>
                        <li className={"collection-item"}>
                            <Link to={"/"}>Startseite</Link>
                        </li>
                        <li className={"collection-item"}>
                            <Link to={"/ruleofthree"}>Dreisatz</Link>
                        </li>
                        <li className={"collection-item"}>
                            <Link to={"/dice"}>Würfelsimulation</Link>
                        </li>
                    </ul>
                </main>
                <Footer/>
            </div>

        );
    }
}

class AppController extends Component {
    render() {
        return <div>
            <Route exact path={"/"} component={App}/>
            <Route path={"/ruleofthree"} component={RuleOfThreeWithIntro}/>
            <Route path={"/dice"} component={DiceWithIntro}/>
        </div>;
    }
}


export default AppController;
