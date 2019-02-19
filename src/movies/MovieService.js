import { api, key } from '../utils/config';
import request from '../utils/request';

function loadMovies() {
    return request.get(`${api}/movie/popular${key}`);
}

export { loadMovies };
