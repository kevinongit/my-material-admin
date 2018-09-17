import * as service from './services'

export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const GET_TOP_MOVIES_SUCCESS = 'GET_TOP_MOVIES_SUCCESS';
export const GET_TOP_MOVIES_ERROR = 'GET_TOP_MOIVES_ERROR';

// export function getTopMoviesStart(page) {
//     return {
//         type: GET_TOP_MOVIES,
//         page,
//     }
// }

export function getTopMoviesSuccess(response) {
    return {
        type: GET_TOP_MOVIES_SUCCESS,
        response
    }
}

export function getTopMoviesError(error) {
    return {
        type: GET_TOP_MOVIES_ERROR,
        error
    }
}

export const getTopMovies = (page) => {
    return (dispatch) => {
        service.getTopMovies(page).then( resp => {
            resp.json()
                .then(json => dispatch(getTopMoviesSuccess(json)))
                .catch(error => dispatch(getTopMoviesError(error)))
        });

    };
}



