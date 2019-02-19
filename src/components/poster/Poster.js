import React from 'react';
import PropTypes from 'prop-types';
import './Poster.scss';

const Poster = ({ url, id, name, click }) => (
    <figure className="movie-poster d-flex justify-content-center">
        <img
            className="movie-poster__image d-flex"
            alt={name}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${url}`}
            onClick={() => click(id)}
            onKeyPress={() => click(id)}
            role="presentation"
        />
    </figure>
);

Poster.defaultProps = {
    id: 0,
    name: 'movie',
    click: () => {},
};

Poster.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    click: PropTypes.func,
};

export default Poster;
