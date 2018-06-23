import React, {Component} from 'react';
import PropTypes from 'prop-types';
import periodicTable from '../elements';
import './PeriodicTable.css';

// Chemical element of the periodic table (shown by a Materialize card) [REACT COMPONENT]
class Element extends Component {
    render() {
        return <div className={"PeriodicTable-Element"}>
            <div className={"card"}>
                <div className={"card-content"}>

                    {/* First row with atomic number and atomic mass */}
                    <p className={"PeriodicTable-Element-first-row"}>
                        <strong className={"left"}>{this.props.atomic_number}</strong>
                        <small className={"right"}>{this.props.atomic_mass}</small>
                    </p>

                    {/* Middle row with symbol of element */}
                    <p className={"PeriodicTable-Element-middle-row"}>
                        <span className={"right card-title"}>{this.props.symbol}</span>
                    </p>

                    {/* Last row with the full name */}
                    <p className={"PeriodicTable-Element-last-row"}>
                        <small>{this.props.name}</small>
                    </p>
                </div>
            </div>
        </div>;
    }
}

Element.propTypes = {
    atomic_number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    atomic_mass: PropTypes.number
};

Element.defaultProps = {
    atomic_mass: 0.0
};


class PeriodicTable extends Component {
    constructor(props) {
        super(props);

        // Init state
        this.state = {};
    }

    render() {
        return <div className={"PeriodicTable"}>
            <div className={"PeriodicTable-elements"}>

                {/* HEADER ROW */}
                <div className={"row"}>
                    {/* Empty 1/12 column (later needed for period) */}
                    <div className={"col s1"}>
                    </div>

                    {/* 11/12 column for name and number of groups */}
                    <div className={"col s11"}>
                        {/* Every group in map */}
                        {periodicTable.groups.map((group) => {
                            return <div className={"col PeriodicTable-header"}
                                        style={{width: periodicTable.width_in_percent * group.width + "%"}}>
                                <div className={"row"}>
                                    <div className={"card"}>
                                        <div className={"card-content"}>
                                <span className={"card-title center"}>
                                    {group.name}
                                </span>
                                        </div>
                                    </div>
                                </div>

                                <div className={"row"}>
                                    {group.subgroups.map((subgroup) => {
                                        return <div className={"col"}
                                                    style={{width: 100 / group.width * subgroup.width + "%"}}>

                                            <div className={"card"}>
                                                <div className={"card-content"}>
                                                <span className={"card-title center"}>
                                                    {subgroup.name}
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>;
                        })}
                    </div>
                </div>
                {/* END HEADER ROW */}

                {/* ELEMENT ROWS */}
                {periodicTable.elements.map((row, row_idx) => {
                    return <div className="row" key={row_idx}>
                        <div className={"col s1"}>
                            {row_idx < 7 ? <div className={"card"}>
                                <div className={"card-content"}>
                                    <span className={"card-title"}>
                                        {row_idx + 1}
                                    </span>
                                </div>
                            </div> : ""}

                        </div>

                        <div className={"col s11"}>
                            {row.map((column, col_idx) => {
                                return <div className={"col"} key={col_idx}
                                            style={{width: periodicTable.width_in_percent + "%"}}>
                                    {column ? <Element atomic_number={column.atomic_number} name={column.german}
                                                       symbol={column.symbol}>{column.german}</Element> : ""}
                                </div>;
                            })}
                        </div>

                    </div>;
                })}
                {/* END ELEMENT ROWS */}

            </div>
        </div>;
    }
}

PeriodicTable.propTypes = {};

PeriodicTable.defaultProps = {};

export default PeriodicTable;