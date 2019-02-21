import { api, key } from '../utils/config';
import request from '../utils/request';

/**
 * Load movies from server
 *
 * @returns {Promise}
 */
const loadMovies = () =>
    request.get(`${api}/movie/popular${key}`).then(({ results: movies }) => Promise.resolve(movies));
/**
 * Load movie details by id from server
 *
 * @returns {Promise}
 */
const loadMovieById = id => request.get(`${api}/movie/${id}${key}`);
/**
 * Filter movies on given criteria.
 *
 * @param {Array} movies - an array of movies
 * @param {Object} filters - filter options
 * @returns {Array}
 */
const filterMovies = (movies, filters) => {
    const props = Object.keys(filters);
    return movies.filter(movie =>
        props.every(prop =>
            prop === 'vote_average'
                ? movie[prop] >= filters[prop]
                : movie[prop] === filters[prop],
        ),
    );
};

export { loadMovies, loadMovieById, filterMovies };
