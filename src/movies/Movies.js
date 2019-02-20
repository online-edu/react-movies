import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Poster, Spinner, Modal, Filter } from '../components';
import { loadMovies, loadMovieById, filterMovies } from './MovieService';

class Movies extends Component {
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

    componentDidMount() {
        loadMovies()
            .then(movies => this.setState({ movies, source: movies }))
            .catch(err => console.log(err))
            .finally(() => this.setState({ loading: false }));
    }

    onMovieClick(id) {
        loadMovieById(id)
            .then(movie => this.setState({ showModal: true, movie }))
            .catch(err => console.log(err))
            .finally(() => this.setState({ loading: false }));
    }

    onModalClose() {
        this.setState({ showModal: false });
    }

    onFilterChange(filters) {
        const { source } = this.state;
        const newMovies = filterMovies(source, filters);
        this.setState({ movies: newMovies });
    }

    render() {
        const { movies, loading, showModal, movie } = this.state;
        return (
            <section>
                <Filter onChange={this.onFilterChange} />
                <Row className="justify-content-center">
                    {(!loading &&
                        movies.map((m, i) => (
                            <Col className="my-3" key={m.id}>
                                <Poster
                                    id={m.id}
                                    alt={m.name}
                                    url={m.poster_path}
                                    click={this.onMovieClick}
                                    tabIndex={i + 7}
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
