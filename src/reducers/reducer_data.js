import { FETCH_DATA, FILTER_BY_COMMENTS } from '../actions/index';

const INITIAL_STATE = { data: [], minCommentsQty: 0 };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload.data.data.children.sort(
                    function (a, b) {
                        if (a.data.num_comments < b.data.num_comments) {
                            return 1;
                        }
                        if (a.data.num_comments > b.data.num_comments) {
                            return -1;
                        }
                        return 0;
                    }
                ),
            };

        case FILTER_BY_COMMENTS:
            console.log(action.commentsQty);
            return { ...state, minCommentsQty: action.commentsQty};

        default:
            return state;
    }
}