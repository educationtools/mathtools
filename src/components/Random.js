import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

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

    /*renderChart = () => {
        const contex = document.getElementById("Dice-chart").getContext('2d');
        console.log(this.state.results);
        let chart = new Chart(contex, {
            type: 'bar',
            data: {
                labels: this.state.results.map((value, idx) => {
                    return (idx+1).toString();
                }),
                datasets: [{
                    label: 'Anzahl der Würfe',
                    data: this.state.results,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        let oldState = this.state;
        oldState.chart = chart;
        this.setState(oldState);
    };

    componentDidMount() {
        //this.renderChart();
    }*/

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
            speed: this.props.speed,
            chart: null
        };

        // Start rolling
        this.roll();
    }

    render() {
        const chartData = {
            labels: this.state.results.map((value, idx) => {
                return (idx + 1).toString();
            }),
            datasets: [{
                label: 'Anzahl der Würfe',
                data: this.state.results,

                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 0,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }]
        };

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
            <div className={"row"}>
                <div className={"col s12 m6"}>
                    <h4>Ergebnisse</h4>
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
                </div>
                <div className={"col s12 m6"}>
                    <h4>Diagramm</h4>
                    {this.state.rolling ?
                        <p className={"flow-text"}>Bitte stoppen Sie das Würfeln, um das Diagramm zu sehen.</p> :
                        <Bar data={chartData} redraw/>}
                </div>
            </div>


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