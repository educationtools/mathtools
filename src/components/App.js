import React, {Component} from 'react';
import './App.css';
import RuleOfThree from '../components/RuleOfThree.js';
import Button from '../components/Button.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-logo">
                        + &minus; &divide; &times;
                    </div>
                    <h1 className="App-title App-heading">MathTools</h1>
                </header>
                <main className="App-main">
                    <h2>Dreisatz – Jetzt online berechnen!</h2>
                    <RuleOfThree/>

                    <Button title="Berechnen"/>
                </main>
            </div>
        )
            ;
    }
}

export default App;
