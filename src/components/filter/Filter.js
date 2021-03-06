import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse';
import Switch from '../switch';
import Button from '../button';
/**
 * Filter component.
 */
class Filter extends Component {
    static get propTypes() {
        return {
            /** Gets called when the user clicks on the 'Apply' button */
            onChange: PropTypes.func.isRequired,
        };
    }

    /**
     * Intilalizes the state and binds all methods.
     *
     * @param {Object} props - access 'props'
     */
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            enLangFilter: false,
            adultFilter: false,
            ratingFilter: 0,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    /**
     * Prepares filter options and pass to the parent component.
     */
    onFilterChange() {
        const {
            ratingFilter: vote_average,
            enLangFilter: original_language,
            adultFilter: adult,
        } = this.state;
        const { onChange } = this.props;
        const commonFilters = { vote_average, adult };
        const filters = original_language
            ? { ...commonFilters, original_language: 'en' }
            : commonFilters;
        onChange(filters);
    }

    /**
     * Updates the state as user updates the filter options.
     *
     * @param {Event} e - an event from dom controls
     */
    handleInputChange(e) {
        const { target } = e;
        const { type, name, checked, value } = target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({ [name]: val });
    }

    /**
     * Render method for component
     */
    render() {
        const { open, ratingFilter } = this.state;
        return (
            <div className="bg-secondary px-3 rounded">
                <section className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Popular movies</h6>
                    <Button
                        label="Filter"
                        aria={{
                            'aria-controls': 'movie-filter',
                            'aria-expanded': open,
                        }}
                        click={() => this.setState({ open: !open })}
                    />
                </section>
                <Collapse in={open}>
                    <div
                        id="movie-filter"
                        role="toolbar"
                        aria-label="Filter options"
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
                                    Rating (&ge;)
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
                            <Switch
                                id="adultFilter"
                                label="Adult"
                                switchToggle={this.handleInputChange}
                            />
                            <Switch
                                id="enLangFilter"
                                label="Original Language"
                                switchToggle={this.handleInputChange}
                            />
                        </div>
                        <div className="mt-1">
                            <Button
                                label="Apply"
                                click={this.onFilterChange}
                            />
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default Filter;
