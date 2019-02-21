import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component.
 */
const Button = ({ aria, tabIndex, label, click }) => (
    <button
        type="button"
        onClick={click}
        aria-label={label}
        tabIndex={tabIndex}
        {...aria}
        className="btn btn-primary my-2"
    >
        {label}
    </button>
);
/**
 * Button props types.
 */
Button.propTypes = {
    /** Id to be assigned to the control. */
    aria: PropTypes.object,
    /** Display value */
    label: PropTypes.string.isRequired,
    /** Gets called when the user clicks on button */
    click: PropTypes.func.isRequired,
    /** Maintain tab index for keyboard navigation. */
    tabIndex: PropTypes.number,
};
export default Button;
