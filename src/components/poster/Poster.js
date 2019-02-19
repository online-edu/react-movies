import React from 'react';
import PropTypes from 'prop-types';
import './Poster.scss';

const Poster = ({ url, id, name, click }) => (
    <figure className="movie-poster">
        <img
            className="movie-poster__image"
            alt={name}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${url}`}
            onClick={click.bind(this, id)}
            onKeyPress={click.bind(this, id)}
            role="presentation"
        />
    </figure>
);

Poster.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};

export default Poster;
