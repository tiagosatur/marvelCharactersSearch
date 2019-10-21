import CryptoJS from 'crypto-js';
import { PRIV_KEY, PUB_KEY } from '../../../keys'

const BASE_URL = 'http://gateway.marvel.com/v1/public';
const CHARACTERS_URL = BASE_URL + '/characters';

export default function mountURL() {
    let ts = new Date().getTime();
    let hash = CryptoJS.MD5(ts + PRIV_KEY + PUB_KEY).toString();
    let url = `${CHARACTERS_URL}?ts=${ts}&apikey=${PUB_KEY}&hash=${hash}`;

    return url;
}
//console.log('url mount', mountURL())
