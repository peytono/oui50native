import { createStore, combineReducers, applyMiddleware } from 'redux';
import { articles } from './articles';
import { favorites } from './favorites';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}