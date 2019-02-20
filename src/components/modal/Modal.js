import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Poster from '../poster';

const MovieModal = ({ show, onHide, movie }) => (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="movie-details"
        className="movie-modal"
        centered
    >
        <Modal.Header>
            <Modal.Title id="movie-details">{movie.title}</Modal.Title>
            <button
                type="button"
                aria-label="Close"
                onClick={onHide}
                className="btn btn-primary"
            >
                Close
            </button>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm lg={4}>
                    <Poster name={movie.title} url={`${movie.poster_path}`} />
                </Col>
                <Col sm lg={8}>
                    <Row>
                        <Col md={12}>
                            <p className="h6 text-primary">Overview</p>
                            <p className="mb-0">
                                <em>{movie.overview}</em>
                            </p>
                        </Col>
                    </Row>
                    <div className="dropdown-divider" />
                    <dl className="row movie-modal__summary--list">
                        <dt className="col-sm-3 text-primary">Tagline</dt>
                        <dd className="col-sm-9">
                            {movie.tagline || 'Not available'}
                        </dd>
                        <dt className="col-sm-3 text-primary">Rating</dt>
                        <dd className="col-sm-9">{movie.vote_average}</dd>
                        <dt className="col-sm-3 text-primary">Status</dt>
                        <dd className="col-sm-9">{movie.status}</dd>
                        <dt className="col-sm-3 text-primary">Release Date</dt>
                        <dd className="col-sm-9">{movie.release_date}</dd>
                        <dt className="col-sm-3 text-primary">Language</dt>
                        <dd className="col-sm-9 text-uppercase">
                            {movie.original_language}
                        </dd>
                    </dl>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
);

MovieModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    movie: PropTypes.shape({ title: PropTypes.string }).isRequired,
};

export default MovieModal;
