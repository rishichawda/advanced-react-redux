import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import asyncPromise from 'middlewares/asyncs';
import stateValidator from 'middlewares/validatestate';
// import ReduxPromise from 'redux-promise';


export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(asyncPromise, stateValidator)
        // applyMiddleware(ReduxPromise)
    );
    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}