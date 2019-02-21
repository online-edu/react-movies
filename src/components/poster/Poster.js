import React from 'react';
import PropTypes from 'prop-types';
import './Poster.scss';

/**
 * Poster component.
 */
const Poster = ({ url, id, name, click }) => (
    <button
        type="button"
        className="btn btn-link"
        onClick={() => click(id)}
        onKeyPress={() => click(id)}
    >
        <figure className="movie-poster d-flex justify-content-center mb-0">
            <img
                className="movie-poster__image d-flex rounded"
                alt={name}
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${url}`}
                role="presentation"
            />
        </figure>
    </button>
);
/**
 * Poster default props.
 */
Poster.defaultProps = {
    id: 0,
    name: 'movie',
    click: () => {},
};
/**
 * Poster props types.
 */
Poster.propTypes = {
    /** Movie poster url */
    url: PropTypes.string.isRequired,
    /** Movie id to map handler */
    id: PropTypes.number,
    /** Movie name as alt for image */
    name: PropTypes.string,
    /** Gets called when the user clicks on the poster(image) */
    click: PropTypes.func,
};

export default Poster;
