const MOVIE_DB_API_KEY = 'ddd9d004006ade13c9d13b30909b8786'
const MOVIE_DB_BASE_URL = 'http://api.themoviedb.org/3'

const createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
    if (queryParams) {
        Object.keys(queryParams)
            .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
}

export const getTopMovies = async({page}) => {
    console.log('hihi')
    const fullUrl = createMovieDbUrl('/movie/top_rated', {
        page
    });
    return fetch(fullUrl);
}

export const searchMovies = async({page, query}) => {
    const fullUrl = createMovieDbUrl('/search/movie', {
        page,
        query
    });
    return fetch(fullUrl);
}

export const getMovieDetails = async ({movieId}) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
    return fetch(fullUrl);
}

const TMDB_IMAGE_BASE_URL = (width = 300) => `http://image.tmdb.org/t/p/w${width}`;

export const updateMoviePictureUrls = (movieResult, width=300) => ({
    ...movieResult,
    backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
    poster_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`,
});

export const getMoviesList = (moviesResponse) => {
    return !!moviesResponse ? ([
        ...moviesResponse.results.map(movieResult => updateMoviePictureUrls(movieResult))
    ]) : null;
}