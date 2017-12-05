import axios from 'axios';

const DATA_URL = 'https://www.reddit.com/r/aww.json';

export const FETCH_DATA = 'FETCH_DATA';
export const FILTER_BY_COMMENTS = 'FILTER_BY_COMMENTS';

export function fetchData() {
    const request = axios.get(DATA_URL);

    return {
        type: FETCH_DATA,
        payload: request,
    };
}

export function filterByComments(commentsQty) {
    console.log('ACTIONS commentsQty: ' + commentsQty);
    return {
        type: FILTER_BY_COMMENTS,
        commentsQty
    };
}