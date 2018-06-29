import { SAVE_COMMENT } from 'actions/types'
import { FETCH_COMMENT } from '../actions/types';
export default function addComment(state = [], action) { 
    switch(action.type) {
        case SAVE_COMMENT: 
            return [ action.payload, ...state ];
        case FETCH_COMMENT:
            const comments = action.payload.data.slice(0,7).map(
                (value)=>{
                    return value.body
            });
            return [...comments, ...state]
        default: return state;
    }
 }