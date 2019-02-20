import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse';

class Filter extends Component {
    static get propTypes() {
        return {
            onChange: PropTypes.func.isRequired,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            enLangFilter: false,
            adultFilter: false,
            ratingFilter: 8,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange() {
        const { ratingFilter, enLangFilter, adultFilter } = this.state;
        const { onChange } = this.props;
        onChange({ ratingFilter, enLangFilter, adultFilter });
    }

    handleInputChange(e) {
        const { target } = e;
        const { type, name } = target;
        const value = type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    render() {
        const { open, ratingFilter } = this.state;
        return (
            <div className="bg-secondary px-3 rounded">
                <section className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Popular movies</h6>
                    <button
                        type="button"
                        onClick={() => this.setState({ open: !open })}
                        aria-controls="movie-filter"
                        aria-label="Filter"
                        aria-expanded={open}
                        tabIndex="0"
                        className="btn btn-primary my-2"
                    >
                        Filter
                    </button>
                </section>
                <Collapse in={open}>
                    <div
                        id="movie-filter"
                        className="border-top border-primary mt-1 py-3 px-1"
                    >
                        <h6 className="text-uppercase">Filter options</h6>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <div>
                                <label
                                    htmlFor="rating-filter"
                                    aria-label="Rating filter"
                                    aria-describedby="rating-filter"
                                >
                                    Rating
                                    <input
                                        type="range"
                                        className="custom-range"
                                        aria-label="Rating range"
                                        onChange={this.handleInputChange}
                                        name="ratingFilter"
                                        min="0"
                                        max="10"
                                        step="0.5"
                                        value={ratingFilter}
                                        id="rating-filter"
                                    />
                                    <span className="text-primary position-absolute font-weight-bold ml-2">
                                        {ratingFilter}
                                    </span>
                                </label>
                            </div>
                            <div className="custom-control custom-switch mt-4">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    aria-label="Adult Checkbox"
                                    id="adult-filter"
                                    name="adultFilter"
                                    onChange={this.handleInputChange}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="adult-filter"
                                    aria-label="Adult filter"
                                    aria-describedby="adult-filter"
                                >
                                    Adult
                                </label>
                            </div>
                            <div className="custom-control custom-switch mt-4">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    onChange={this.handleInputChange}
                                    aria-label="Original Language Checkbox"
                                    name="enLangFilter"
                                    id="en-lang-filter"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="en-lang-filter"
                                    aria-label="Original Language English filter"
                                    aria-describedby="en-lang-filter"
                                >
                                    Original Language English
                                </label>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button
                                type="button"
                                onClick={this.onFilterChange}
                                className="btn btn-primary"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default Filter;
