
import * as TYPES from '../actionTypes';

const initialState = {
    term: '',
    results: [],
    total: null,
    isLoading: false,
    error: '',
}

export default function search(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TYPES.SEARCH_PENDING:
            return {
                ...state,
                isLoading: true,
          }
        case TYPES.SEARCH_SUCCESS:
        return {
            ...state,
            isLoading: false,
            results: payload.results,
            total: payload.total,
            term: payload.term,
        }
        case TYPES.SEARCH_FAIL:
            return {
                isLoading: false,
                error: payload.error,
          }
        default:
          return state
      }
}