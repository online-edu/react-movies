import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from '../button';

/**
 * Modal component.
 */
const CommonModal = ({ show, onHide, title, children }) => (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="movie-details"
        className="movie-modal"
        centered
    >
        <Modal.Header className="align-items-center">
            <Modal.Title id="movie-details">{title}</Modal.Title>
            <Button label="Close" click={onHide} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
    </Modal>
);
/**
 * Modal props types.
 */
CommonModal.propTypes = {
    /** Toggle modal */
    show: PropTypes.bool.isRequired,
    /** Gets called when the modal is closed. */
    onHide: PropTypes.func.isRequired,
    /** Movie details */
    title: PropTypes.string.isRequired,
    /** Children for modal body */
    children: PropTypes.element.isRequired,
};

export default CommonModal;
