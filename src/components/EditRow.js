import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit.js';
import './Edit.css';
import {FormGroup, Label} from "reactstrap";

class EditRow extends Component {
    constructor(props) {
        super(props);


        this.state = {
            values: this.props.columns.map((column, idx) => {
                return column.defaultValue || ''
            })
        }
    }

    doOnDataChange = () => {
        console.log("RELEASE: onDataChange");

        const data = {
            index: this.props.index,
            values: this.state.values
        };

        this.props.onDataChange(data);
    }

    _onChange = (e) => {
        const target = e.target;
        const parent = target.parentNode.parentNode;
        const index = parent.cellIndex;

        // Update state with changed value
        let values = this.state.values;
        values[index] = target.value;
        this.setState({values: values});

        // Release onDataChanged
        this.doOnDataChange();
    }

    render() {
        console.log(this.state.values);

        const columns = this.props.columns;

        const row = columns.map((column, idx) => {
            const defaultValue = column.defaultValue;
            return <td key={idx}>
                <FormGroup>
                    <Label>{column.validationErrorMessage || ''}</Label>
                    <Edit defaultValue={defaultValue} onChange={this._onChange} disabled={column.disabled}
                          value={column.value} {...column}/>
                </FormGroup>
            </td>
        });

        return <tr>{row}</tr>;
    }
}

EditRow.propTypes = {
    columns: PropTypes.array, // {defaultValue, disabled}
    index: PropTypes.number,
    onDataChange: PropTypes.func
};

export default EditRow;