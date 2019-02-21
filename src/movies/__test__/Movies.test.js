import React from 'react';
import { shallow } from 'enzyme';
import Movies from '../Movies';
import { loadMovies, loadMovieById } from '../MovieService';
import { Modal, Spinner } from '../../components';

describe('<Movie />', () => {
    it('renders correctly', () => {
        const component = shallow(<Movies />);
        expect(component).toMatchSnapshot();
    });

    it('renders a <Modal /> component', () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper.find(Modal)).toHaveLength(1);
    });

    it('renders a <Spinner /> component', () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('calls componentDidMount', () => {
        jest.spyOn(Movies.prototype, 'componentDidMount');
        const wrapper = shallow(<Movies />);
        wrapper.update();
        expect(Movies.prototype.componentDidMount).toBeCalledTimes(1);
    });

    it('expects to change state for "showModal" on modal close', () => {
        const wrapper = shallow(<Movies />);
        wrapper.setState({ showModal: true });
        wrapper.instance().onModalClose();
        expect(wrapper.state().showModal).toBe(false);
    });

    it('expects "source, movies" to be defined', () => {
        const wrapper = shallow(<Movies />);
        wrapper.instance().onFilterChange({ original_language: 'en' });
        const { source } = wrapper.state();
        expect(source).toBeDefined();
    });

    it('componentDidMount should fetch, and put movies in state', () => {
        const wrapper = shallow(<Movies />);
        return loadMovies()
            .then(movies => {
                wrapper.setState({ movies });
                expect(wrapper.state('movies').length).toEqual(20);
            })
            .catch(err => {
                wrapper.setState({ loading: false });
                expect(wrapper.state('loading')).toBe(false);
                expect(err).toBeDefined();
            });
    });

    it('onMovieClick should fetch movie and put it in state', () => {
        const wrapper = shallow(<Movies />);
        wrapper.instance().onMovieClick(480530);
        wrapper.update();
        expect(wrapper.state('movies')).toBeDefined();
        return loadMovieById(480530).then(movie => {
            wrapper.setState({ showModal: true, movie, loading: false });
            expect(wrapper.state('movie')).toHaveProperty(['id']);
            expect(wrapper.state('showModal')).toBe(true);
        });
    });
});
