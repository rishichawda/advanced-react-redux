import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles action of type SAVE_COMMENT', ()=>{
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    }
    const newState = commentReducer([], action);
    expect(newState).toEqual(['new comment']);
});

it('handles action of unknown type', ()=>{
    const newState = commentReducer([], {
        type: 'blah blah'
    });
    expect(newState).toEqual([]);

})