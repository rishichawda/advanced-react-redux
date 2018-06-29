export default ({ dispatch }) => next => action => {
    // debugger;
    if(!action.payload || !action.payload.then) { // If the action doesn't contain a promise.
    return next(action);
}
// If action contains a promise.
action.payload.then((response)=>{
        debugger;
        const new_action = { ...action, payload: response };
        dispatch(new_action);
    });
}

/* export default function ({ dispatch }) { 
    return function (next) {
        return function (action) { 
            if(!action.payload || !action.payload.then) { // If the action doesn't contain a promise.
                return next(action);
            }
            // If action contains a promise.
            action.payload.then((response)=>{
                const new_action = { ...action, payload: response };
                dispatch(new_action);
            });
         }
    }
} */