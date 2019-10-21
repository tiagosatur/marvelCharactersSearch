import * as TYPES from '../actionTypes';
import { searchCharactersService } from '../../services/api'

// ACTION CREATORS
export const searchPending = () => ({ type: TYPES.SEARCH_PENDING });
export const searchSuccess = data => ({ type: TYPES.SEARCH_SUCCESS, payload: data });
export const searchFail = error => ({ type: TYPES.SEARCH_FAIL, payload: error });


// THUNK ACTIONS
export const searchTerm = term => {
    return dispatch => {
        dispatch(searchPending());
        searchCharactersService(term)
            .then(res => {
                const { data } = res;
                console.log('search RES', res)
                dispatch(searchSuccess({...data, term}));
            })
            .catch(error => {
                console.log('search error', error)
                 dispatch(searchFail(error))
            });
    }
}