/**
 * Copyright (c) 2017-present, 
 * All rights reserved.
 *
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
