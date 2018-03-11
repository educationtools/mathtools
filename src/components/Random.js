import React, {Component} from 'react';
import PropTypes from 'prop-types';

function randomInt(min, max) {
    // Returns a random integer between <min> and <max>

    return Math.round(Math.random() * (max - min)) + min;
}

class Dice extends Component {
    _onRollingModeChange = (e) => {
        // Print information about this in console
        console.log("[DICE] [EVENT DETECTED] CHANGE ROLLING MODE");
        //console.log(e.target.checked);

        // Change rolling state
        const oldState = this.state;
        oldState.rolling = e.target.checked;
        this.setState(oldState);

        // Start rolling (or not)
        this.roll();
    };

    _onSpeedChange = (e) => {
        console.log("[DICE] [EVENT DETECTED] CHANGE ROLLING SPEED");
        //console.log(e.target.value);

        const value = Number.parseInt(e.target.value, 10);

        if (Number.isNaN(value)) {
            return false;
        }

        this.setState({
            speed: value
        });
    };


    roll = () => {
        // Check whether rolling is enabled
        if (!this.state.rolling) {
            return null;
        }

        // Save old state
        let oldState = this.state;

        // Roll the dice
        let x = randomInt(1, 6);
        //console.log("Rolled " + x);

        // Update results (in state)
        oldState.results[x - 1]++;
        oldState.totalRolls++;
        this.setState(oldState);

        // Set next time rolling
        window.setTimeout(this.roll, this.state.speed);
    };

    constructor(props) {
        super(props);

        // Init state
        this.state = {
            results: [
                0,
                0,
                0,
                0,
                0,
                0
            ],
            totalRolls: 0,
            rolling: this.props.rollAtStart,
            speed: this.props.speed
        };

        // Start rolling
        this.roll();
    }

    render() {
        return <div className={"Dice"}>
            <div className="switch Dice-rolling-on-switch">
                <div className={"row"}>
                    <div className={"col s12 m4"}>
                        Würfel an-/ausschalten<br/>
                        <label>
                            Nicht Würfeln
                            <input type="checkbox" onChange={this._onRollingModeChange}
                                   checked={this.state.rolling ? 'checked' : ''}/>
                            <span className="lever"/>
                            Würfeln
                        </label>
                    </div>


                    <div className="range-field col s12 m8">
                        Würfelgeschwindigkeit (Ein Wurf pro <i>x</i> ms)
                        <input type="range" min="5" max="100" defaultValue={this.props.speed}
                               onChange={this._onSpeedChange}/>
                    </div>
                </div>
            </div>
            <table className={"Dice-result-table"}>
                <thead>
                <tr>
                    <th>Die Augenzahl …</th>
                    <th>… wurde bis jetzt <i>x</i>-mal gewürfelt.</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Summe der Würfe</td>
                    <td>{this.state.totalRolls}</td>
                </tr>
                {this.state.results.map(function (result, idx) {
                    return <tr key={idx}>
                        <td>{(idx + 1).toString()}</td>
                        <td>{result.toString()}</td>
                    </tr>;
                })}
                </tbody>
            </table>

        </div>;
    }
}

Dice.propTypes = {
    rollAtStart: PropTypes.bool,
    speed: PropTypes.number
};

Dice.defaultProps = {
    rollAtStart: true,
    speed: 10
};

export default Dice;