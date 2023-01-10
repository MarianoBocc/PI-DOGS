import {applyMiddleware} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';



export const store = configureStore({
    reducer: rootReducer,
    applyMiddleware: applyMiddleware(thunk),
    enhancer: composeWithDevTools()
});

//export const store= configureStore ( rootReducer, composeWithDevTools(applyMiddleware(thunk)))





