import mountURL from './url';

const customHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
});

export function searchCharactersService(term) {
    
    return fetch(`${mountURL()}&nameStartsWith=${term}`, {
        method: 'GET',
        headers: customHeaders,
    })
    .then(res => {
        if(res.status !== 200) {
            throw res;
        }
        
        return res.json()
    })
    .then(res => res);
}