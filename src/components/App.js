// Import React
import React, {Component} from "react";
import {Link} from "react-router-dom";

// Import jQuery
// import $ from 'jquery/dist/jquery.js';

// Import structure
import {Header, Footer} from "./AppStructure";


class App extends Component {
    componentDidMount() {
        // $(document).ready(function () {
        //     console.log("INIT COLLAPBSIBLE");
        //     $('.collapsible').collapsible();
        // });
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

export {App};