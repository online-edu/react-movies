import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component.
 */
const Button = ({ aria, label, click }) => (
    <button
        type="button"
        onClick={click}
        aria-label={label}
        {...aria}
        className="btn btn-primary my-2"
    >
        {label}
    </button>
);
/**
 * Button default props.
 */
Button.defaultProps = {
    aria: {},
};
/**
 * Button props types.
 */
Button.propTypes = {
    /** Id to be assigned to the control. */
    aria: PropTypes.shape({ 'aria-controls': PropTypes.string }),
    /** Display value */
    label: PropTypes.string.isRequired,
    /** Gets called when the user clicks on button */
    click: PropTypes.func.isRequired,
};
export default Button;
