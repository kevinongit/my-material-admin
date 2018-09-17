import React from 'react'
import {connect} from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'


import {withRouter} from 'react-router-dom'

import * as movieActions from './actions'
import MovieList from '../../components/MovieList/MovieList'
import { getMoviesList } from './services'

class MovieBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const currentPage = 1;
        const {topMovies} = this.props;
        if (!topMovies || !topMovies.response || (topMovies.response.page < currentPage)) {
            console.log('11')
            this.props.getTopMovies(currentPage); // from actions
        }
    }

    render() {
        const { topMovies } = this.props;
        const movies = getMoviesList(topMovies.response);
        return (
            <div>

                <Grid>
                    <Row>
                        <p>search will go here</p>
                    </Row>
                    <Row>
                        <MovieList movies={movies} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        topMovies: state.movieBrowser.topMovies
    }),
    { ...movieActions }
)(MovieBrowser));