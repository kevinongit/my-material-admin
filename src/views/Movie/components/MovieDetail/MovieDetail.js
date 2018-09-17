import React from 'react'

import * as services from '../../containers/MovieBrowser/services'

class MovieDetail extends React.Component {
    render() {
        const movie = services.updateMoviePictureUrls(this.props.location.movie);
        const genres = (movie && movie.genres) ? movie.genres.map(genres => genres.name).join(', ') : '';
        return (
          <div>
            <h1> Title : {movie.title} </h1>
            <h5> Genres : {genres} </h5>
            <p> {movie.overview} </p>
            <p> Popularity: {movie.popularity} </p>
            <p> Budget: ${movie.budget}</p>
          </div>
        );
    }
}

export default MovieDetail;