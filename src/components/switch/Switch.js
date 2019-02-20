import React from 'react';
import PropTypes from 'prop-types';

/**
 * Switch component.
 */
const Switch = ({ switchToggle, id, tabIndex, label }) => (
    <div className="custom-control custom-switch">
        <input
            type="checkbox"
            className="custom-control-input"
            aria-label={`${label} Checkbox`}
            id={id}
            name={id}
            onChange={switchToggle}
            tabIndex={tabIndex}
        />
        <label
            className="custom-control-label"
            htmlFor={id}
            aria-label={`${label} filter`}
            aria-describedby={id}
        >
            {label}
        </label>
    </div>
);
/**
 * Switch props types.
 */
Switch.propTypes = {
    /** Id to be assigned to the control. */
    id: PropTypes.number.isRequired,
    /** Display value */
    label: PropTypes.string.isRequired,
    /** Gets called when the user clicks on switch */
    switchToggle: PropTypes.func.isRequired,
    /** Maintain tab index for keyboard navigation. */
    tabIndex: PropTypes.number.isRequired,
};
export default Switch;
