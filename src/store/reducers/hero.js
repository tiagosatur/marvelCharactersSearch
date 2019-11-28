
import * as TYPES from '../actionTypes';

const initialState = {
    info: {},
    isLoading: false,
    error: '',
}

export default function search(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TYPES.GET_HERO_PENDING:
            return {
                ...state,
                isLoading: true,
                info: {},
          }
        case TYPES.GET_HERO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                info: payload,
            }
        case TYPES.GET_HERO_FAIL:
            return {
                isLoading: false,
                error: payload.error,
          }
        default:
          return state
      }
}