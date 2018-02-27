import React, {Component} from 'react';

import './RuleOfThree.css'
import EditRow from "./EditRow";

class RuleOfThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                [
                    {
                        value: 0,
                        validationError: false,
                        disabled: false,
                    },
                    {
                        value: 1,
                        validationError: false,
                        disabled: false
                    }
                ],
                [
                    {
                        value: 1,
                        validationError: false,
                        disabled: true
                    },
                    {
                        value: 0,
                        validationError: false,
                        disabled: true
                    }
                ],
                [
                    {
                        value: 0,
                        validationError: false,
                        disabled: false
                    },
                    {
                        value: 0,
                        validationError: false,
                        disabled: true
                    }
                ]
            ]
        };
    }

    calc = () => {
        const in0 = this.state.fields[0][0].value;
        const in1 = this.state.fields[0][1].value;
        const mid1 = in1 / in0;
        const out0 = this.state.fields[2][0].value;
        const out1 = mid1 * out0;

        const old = this.state;
        old.fields[1][1].value = mid1;
        old.fields[2][1].value = out1;
        this.setState(old);
    }

    _onDataChange = (data) => {
        console.log(data);
        const values = data.values;

        for (let i = 0; i < values.length; i++) {
            let _new = this.state;

            const newValue = Number.parseFloat(values[i].replace(',', '.'));
            console.log(newValue);

            if (Number.isNaN(newValue)) {
                _new.fields[data.index][i].validationError = true;
                console.log("VAL ERROR");
            } else {
                _new.fields[data.index][i].validationError = false;
                _new.fields[data.index][i].value = newValue;
            }


            this.setState(_new);
            console.log("FIELDS");
            console.log(this.state.fields[data.index][i]);
        }

        // Do calculation
        this.calc();
    }


    render() {
        console.log(this.state);
        return <div className="RuleOfThree">
            <div className={"RuleOfThree-input"}>
                Das hast du eingegeben …

                <table>
                    <thead>
                    <th>A</th>
                    <th>B</th>
                    </thead>
                    <tbody>
                    {this.state.fields.map((row, idx) => {
                        return <EditRow key={idx}
                                        columns={row.map((field, idx2) => {
                                            let validationErrorMessage = null;
                                            if (field.validationError) {
                                                validationErrorMessage = "Bitte geben Sie eine gültige Zahl ein.";
                                            }

                                            // Return object
                                            let retObj = {
                                                defaultValue: this.state.fields[idx][idx2].value.toString(),
                                                disabled: field.disabled,
                                                validationErrorMessage: validationErrorMessage
                                            };
                                            if (field.disabled) {
                                                retObj.value = field.value;
                                            }
                                            return retObj;
                                        })}
                                        onDataChange={this._onDataChange}
                                        index={idx}/>;

                    })}
                    </tbody>
                </table>
            </div>


            <div className={"RuleOfThree-detected"}>
                … und das hat der Computer erkannt:

                <table>
                    <thead>
                    <th>A</th>
                    <th>B</th>
                    </thead>
                    <tbody>
                    {this.state.fields.map((row, idx) => {
                        return <tr key={idx}>{row.map((field, idx2) => {

                            return <td key={idx2}>{field.value.toString()}</td>;
                        })}
                        </tr>;

                    })}
                    </tbody>
                </table>
            </div>
        </div>;
    }
}

RuleOfThree.defaultProps = {

};

RuleOfThree.propTypes = {

};

export default RuleOfThree;