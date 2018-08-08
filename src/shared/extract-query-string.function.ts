import { appendQueryString } from './';

export function extractQueryString(params) {
    let queryString = '?';

    // map query params
    Object.keys(params).forEach(key => {
        if (!queryString.includes(key)) {
            queryString = appendQueryString(queryString, key, params[key]);
        }
    });

    return queryString;
}