import { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { searchTerm } from '../store/actions';


const useAction = () => {
    const connectDispatch = useDispatch();
    const makeAction = action => useCallback(data => connectDispatch(action(data)), [connectDispatch]);

    const searchTermAction = makeAction(searchTerm);


    return {
        searchTermAction,

    }
}

export default useAction;