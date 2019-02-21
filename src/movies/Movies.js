import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Poster, Spinner, Modal, Filter } from '../components';
import { loadMovies, loadMovieById, filterMovies } from './MovieService';

/**
 * Movie component.
 */
class Movies extends Component {
    /**
     * Intilalizes the state and binds all methods.
     *
     * @param {Object} props - access 'props'
     */
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            source: [],
            movie: {},
            loading: true,
            showModal: false,
        };
        this.onMovieClick = this.onMovieClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    /**
     * Load movies once component is mounted.
     */
    componentDidMount() {
        loadMovies()
            .then(movies => this.setState({ movies, source: movies, loading: false }))
            .catch(err => this.setState({ loading: false }));
    }

    /**
     * Get a movie details
     *
     * @param {number} id - movie id
     */
    onMovieClick(id) {
        loadMovieById(id)
            .then(movie => this.setState({ showModal: true, movie, loading: false }))
            .catch(err => this.setState({ loading: false }));
    }

    /**
     * Toggle modal state on close.
     *
     */
    onModalClose() {
        this.setState({ showModal: false });
    }

    /**
     * Toggle modal state on close.
     *
     * @param {Object} filters - list of set filters
     */
    onFilterChange(filters) {
        const { source } = this.state;
        const newMovies = filterMovies(source, filters);
        this.setState({ movies: newMovies });
    }

    /**
     * Render method for component
     */
    render() {
        const { movies, loading, showModal, movie } = this.state;
        return (
            <section>
                <Filter onChange={this.onFilterChange} />
                <Row className="justify-content-center">
                    {(!loading &&
                        movies.map((m, i) => (
                            <Col className="my-3 text-center" key={m.id}>
                                <Poster
                                    id={m.id}
                                    name={m.original_title}
                                    url={m.poster_path}
                                    click={this.onMovieClick}
                                />
                            </Col>
                        ))) || <Spinner />}
                </Row>
                <Modal
                    show={showModal}
                    movie={movie}
                    onHide={this.onModalClose}
                />
            </section>
        );
    }
}

export default Movies;
