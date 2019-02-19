import axios from 'axios';

export default {
    get(url, request) {
        return axios
            .get(url, request)
            .then(resp => Promise.resolve(resp.data))
            .catch(err => Promise.reject(err));
    },
};
