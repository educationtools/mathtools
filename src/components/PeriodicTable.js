import React, {Component} from 'react';
import PropTypes from 'prop-types';
import periodicTable from '../elements';
import './PeriodicTable.css';

class Element extends Component {
    render() {
        return <div className={"PeriodicTable-Element"}>
            <div className={"card"}>
                <div className={"card-content"}>
                    <p className={"PeriodicTable-Element-first-row"}>
                        <strong className={"left"}>{this.props.atomic_number}</strong>
                        <small className={"right"}>{this.props.atomic_mass}</small>
                    </p>
                    <p className={"PeriodicTable-Element-middle-row"}>
                        <span className={"right card-title"}>{this.props.symbol}</span>
                    </p>
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
                {periodicTable.elements.map((row, row_idx) => {
                    return <div className="row" key={row_idx}>
                        {row.map((column, col_idx) => {
                            return <div className={"col"} key={col_idx}
                                        style={{width: periodicTable.width_in_percent + "%"}}>
                                {column ? <Element atomic_number={column.atomic_number} name={column.german}
                                                   symbol={column.symbol}>{column.german}</Element> : ""}
                            </div>;
                        })}
                    </div>;
                })}
            </div>
        </div>;
    }
}

PeriodicTable.propTypes = {};

PeriodicTable.defaultProps = {};

export default PeriodicTable;