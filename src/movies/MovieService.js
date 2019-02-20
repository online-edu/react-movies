import { api, key } from '../utils/config';
import request from '../utils/request';

const loadMovies = () =>
    request
        .get(`${api}/movie/popular${key}`)
        .then(({ results: movies }) => Promise.resolve(movies));

const loadMovieById = id => request.get(`${api}/movie/${id}${key}`);

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
