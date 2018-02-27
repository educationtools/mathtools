import React, {Component} from 'react';
import './App.css';
import RuleOfThree from '../components/RuleOfThree.js';

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
                    <p>
                        Weitere Information zum Dreisatz gibt es bei <a href={"https://www.frustfrei-lernen.de/mathematik/dreisatz-rechnen-proportional.html"}>
                            „Frustfrei lernen“
                        </a>!
                    </p>
                    <RuleOfThree/>
                </main>
            </div>
        )
            ;
    }
}

export default App;
