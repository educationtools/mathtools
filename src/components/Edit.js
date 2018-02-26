import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue || ''
        };

    }

    _onChange = (e) => {
        console.log("GOT: onChange");

        this.setState({value: e.target.value});
        this.props.onChange(e);
    };

    render() {
        return <input
            className="Edit"
            type="text"
            disabled={this.props.disabled ? "disabled" : ""}
            defaultValue={this.props.defaultValue}
            value={this.props.value}
            onChange={this._onChange}/>;
    }
}

Edit.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};

export default Edit;
