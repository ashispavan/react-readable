import {FETCH_COMMENTS, FETCH_COMMENT} from '../actions'
import _ from 'lodash';


function commentsReducer(commentsState = {}, action) {

    switch(action.type) {
        case FETCH_COMMENTS:
            return _.mapKeys(action.payload.data, 'id');
        
        case FETCH_COMMENT:
            return {...commentsState, [action.payload.data.id]: action.payload.data};
        default:
            return commentsState;
    }
}

export default commentsReducer;