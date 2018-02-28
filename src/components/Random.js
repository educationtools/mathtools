import React, {Component} from 'react';

//import PropTypes from 'prop-types';

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

class Dice extends Component {
    _onRollingOnChange = (e) => {
        console.log("ROLLING MODE IS CHANGING!");
        console.log(e.target.checked);
        const oldState = this.state;
        oldState.rolling = e.target.checked;
        this.setState(oldState);
        this.roll();
    };
    roll = () => {
        if (!this.state.rolling) {
            return null;
        }
        let oldState = this.state;
        let x = randomInt(1, 6);
        //console.log("Rolled " + x);
        oldState.results[x - 1] += 1;
        this.setState(oldState);
        window.setTimeout(this.roll, 10);
    };

    constructor(props) {
        super(props)

        this.state = {
            results: [
                0,
                0,
                0,
                0,
                0,
                0
            ],
            rolling: true
        };

        this.roll();
    }

    render() {
        return <div className={"Dice"}>
            <div className="switch Dice-rolling-on-switch">
                <label>
                    Nicht Würfeln
                    <input type="checkbox" onChange={this._onRollingOnChange}
                           checked={this.state.rolling ? 'checked' : ''}/>
                    <span className="lever"/>
                    Würfeln
                </label>
            </div>
            <table className={"Dice-result-table"}>
                <thead>
                <tr>
                    <th>Die Augenzahl …</th>
                    <th>… wurde x-mal gewürfelt.</th>
                </tr>
                </thead>
                <tbody>
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

Dice.propTypes = {};

export default Dice;