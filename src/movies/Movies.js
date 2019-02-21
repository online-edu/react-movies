import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Poster, Spinner, Modal, Filter } from '../components';
import { loadMovies, loadMovieById, filterMovies } from './MovieService';
import MovieDetails from './MovieDetails';

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
            .catch(err => this.handleError(err));
    }

    /**
     * Get a movie details
     *
     * @param {number} id - movie id
     */
    onMovieClick(id) {
        loadMovieById(id)
            .then(movie => this.setState({ showModal: true, movie, loading: false }))
            .catch(err => this.handleError(err));
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
     * Handles common errors for n/w requests.
     *
     * @param {string} err - Error message
     */
    handleError(err) {
        console.error(err);
        this.setState({ loading: false });
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
                    {(!loading
                        && movies.map(m => (
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
                {showModal && (
                    <MovieDetails
                        show={showModal}
                        onHide={this.onModalClose}
                        movie={movie}
                    />
                )}
            </section>
        );
    }
}

export default Movies;
