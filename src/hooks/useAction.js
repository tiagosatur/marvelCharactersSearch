import { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { searchTerm, getHero } from '../store/actions';


const useAction = () => {
    const connectDispatch = useDispatch();
    const makeAction = action => useCallback(data => connectDispatch(action(data)), [connectDispatch]);

    const searchTermAction = makeAction(searchTerm);
    const getHeroAction = makeAction(getHero);

    


    return {
        searchTermAction,
        getHeroAction,
    }
}

export default useAction;