import NetInfo from '@react-native-community/netinfo';

import * as TYPES from '../actionTypes';
import { getHeroService } from '../../services/api'


// ACTION CREATORS
export const getHeroPending = () => ({ type: TYPES.GET_HERO_PENDING });
export const getHeroSuccess = data => ({ type: TYPES.GET_HERO_SUCCESS, payload: data });
export const getHeroFail = error => ({ type: TYPES.GET_HERO_FAIL, payload: error });


// THUNK ACTIONS
export const getHero = ({ id }) => {

    return async dispatch => {
        let isOnline = await NetInfo.isConnected.fetch();

        if(isOnline) {
            dispatch(getHeroPending());
            
            getHeroService({ id })
                .then(res => {
                    dispatch(getHeroSuccess(res));
                })
                .catch(error => {
                    dispatch(getHeroFail(error))
                });
        }
    }
}