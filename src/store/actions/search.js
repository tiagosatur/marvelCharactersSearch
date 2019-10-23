import * as TYPES from '../actionTypes';
import { searchCharactersService } from '../../services/api'

// ACTION CREATORS
export const searchPending = () => ({ type: TYPES.SEARCH_PENDING });
export const searchSuccess = data => ({ type: TYPES.SEARCH_SUCCESS, payload: data });
export const searchFail = error => ({ type: TYPES.SEARCH_FAIL, payload: error });


// THUNK ACTIONS
export const searchTerm = ({ term, offset, itemsPerPage }) => {
    return dispatch => {
        dispatch(searchPending());
        searchCharactersService({term, offset, itemsPerPage})
            .then(res => {
                
                dispatch(searchSuccess({...res, term}));
            })
            .catch(error => {
                 dispatch(searchFail(error))
            });
    }
}