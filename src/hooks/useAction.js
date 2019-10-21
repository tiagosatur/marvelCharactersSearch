import { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { searchTerm } from '../store/actions';


const useAction = () => {
    const dispatch = useDispatch();
    const makeAction = action => useCallback(data => dispatch(action(data)), [dispatch]);

    const searchTermAction = makeAction(searchTerm);


    return {
        searchTermAction,

    }
}

export default useAction;