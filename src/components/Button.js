import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        switch (this.props.style) {
            default:
                return <button className="Button" type="submit">{this.props.title}</button>;

        }
    }
}

Button.defaultProps = {
    style: 'submit',
};

Button.propTypes = {
    style: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Button;