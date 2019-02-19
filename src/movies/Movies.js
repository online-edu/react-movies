import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Poster, Spinner, Modal } from '../components';
import { loadMovies, loadMovieById } from './MovieService';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: {},
            selectedMovie: {},
            loading: true,
            showModal: false,
        };
        this.onMovieClick = this.onMovieClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentDidMount() {
        loadMovies()
            .then(movies => {
                this.setState({ movies });
                console.log(movies);
            })
            .catch(err => console.log(err))
            .finally(() => this.setState({ loading: false }));
    }

    onMovieClick(id) {
        loadMovieById(id)
            .then(movie => {
                this.setState({ showModal: true, selectedMovie: movie });
                console.log(movie);
            })
            .catch(err => console.log(err))
            .finally(() => this.setState({ loading: false }));
    }

    onModalClose() {
        this.setState({ showModal: false });
    }

    render() {
        const {
            movies: { results },
            loading,
            showModal,
            selectedMovie,
        } = this.state;
        return (
            <section>
                <Row className="justify-content-center">
                    {(!loading &&
                        results.map(movie => (
                            <Col className="my-3" key={movie.id} sm>
                                <Poster
                                    id={movie.id}
                                    alt={movie.name}
                                    url={movie.poster_path}
                                    click={this.onMovieClick}
                                />
                            </Col>
                        ))) || <Spinner />}
                </Row>
                <Modal
                    show={showModal}
                    movie={selectedMovie}
                    onHide={this.onModalClose}
                />
            </section>
        );
    }
}

export default Movies;
