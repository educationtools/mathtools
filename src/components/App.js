import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import RuleOfThree from '../components/RuleOfThree.js';
import {Navbar, NavbarBrand} from "reactstrap";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                    <NavbarBrand>
                        MathTools
                    </NavbarBrand>
                </Navbar>
                <main className="App-main">
                    <h2>
                        Dreisatz
                        <small className={"text-muted"}> :RuleOfThree</small>
                    </h2>
                    <p className={"text-muted"}>
                        Weitere Information zum Dreisatz gibt es bei <a
                        href={"https://www.frustfrei-lernen.de/mathematik/dreisatz-rechnen-proportional.html"}>
                        „Frustfrei lernen“
                    </a>!
                    </p>
                    <p className={"lead"}>
                        Der Dreisatz – wer kennt ihn nicht aus dem Matheunterricht.
                        Doch manchmal benötigt man ihn nur kurz, um kleine Dinge zu berechnen.
                        Da hilft einem ein Onlinetool weiter:&nbsp;
                        <strong>Einfach ausfüllen und das Ergebnis kommt sofort!</strong>
                    </p>
                    <p>
                        <strong>Kleiner Tipp: </strong>Du kannst mit <kbd>TAB</kbd> ganz einfach zwischen den Feldern
                        wechseln. Einfach mal ausprobieren!
                    </p>
                    <RuleOfThree/>
                </main>
            </div>
        );
    }
}

export default App;
