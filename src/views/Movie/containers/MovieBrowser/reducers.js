import { combineReducers } from 'redux'
import * as actions from './actions'

// const topMoviesReducer = (state, action) => {
//     const existingMovie = state.response ? state.response.results : [];

//     return {
//         ...state,
//         response: {
//             ...action.response,
//             results: [
//                 ...existingMovie,
//                 ...action.response.results,
//             ]
//         }
//     };
// }

const topMovieReducer = (state={response:null, request: null}, action) => {
    switch (action.type) {
        case actions.GET_TOP_MOVIES_SUCCESS:
            const existingMovie = state.response ? state.response.results : [];
            return {
                ...state,
                response: {
                    ...action.response,
                    results: [
                        ...existingMovie,
                        ...action.response.results,
                    ]
                }
            };
        case actions.GET_TOP_MOVIES_ERROR:
            return {
                ...state,
                ...action.error,
            }
        default:
            return state;
    }
}

const movieBrowserReducer = combineReducers({
    topMovies: topMovieReducer,
});

export default movieBrowserReducer;