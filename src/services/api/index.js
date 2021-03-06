import mountURL from './url';
import searchMiddleware from '../searchMiddleware';
import getHeroMiddleware from '../getHeroMiddleware';

const customHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
});

export function searchCharactersService({term, offset = 0, itemsPerPage = 4}) {
    
    return fetch(`${mountURL()}&nameStartsWith=${term}&offset=${offset}&limit=${itemsPerPage}`, {
        method: 'GET',
        headers: customHeaders,
    })
    .then(res => {
        if(res.status !== 200) {
            throw res;
        }
        return res.json()
    })
    .then(res => {
        return searchMiddleware(res);
    });
}

export function getHeroService({ id }) {
    
    return fetch(`${mountURL()}&id=${id}`, {
        method: 'GET',
        headers: customHeaders,
    })
    .then(res => {
        if(res.status !== 200) {
            throw res;
        }
        return res.json()
    })
    .then(res => {
        return getHeroMiddleware(res);
    });
}