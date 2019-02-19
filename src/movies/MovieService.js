import { api, key } from '../utils/config';
import request from '../utils/request';

const loadMovies = () => request.get(`${api}/movie/popular${key}`);

const loadMovieById = id => request.get(`${api}/movie/${id}${key}`);

export { loadMovies, loadMovieById };
