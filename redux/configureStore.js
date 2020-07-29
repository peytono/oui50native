import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { articles } from './articles';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}