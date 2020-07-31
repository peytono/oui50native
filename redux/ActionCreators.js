import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchArticles = () => dispatch => {

    dispatch(articlesLoading());

    return fetch(baseUrl + 'articles')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(articles => dispatch(addArticles(articles)))
        .catch(error => dispatch(articlesFailed(error.message)));
};

export const articlesLoading = () => ({
    type: ActionTypes.ARTICLES_LOADING
});

export const articlesFailed = errMess => ({
    type: ActionTypes.ARTICLES_FAILED,
    payload: errMess
});

export const addArticles = articles => ({
    type: ActionTypes.ADD_ARTICLES,
    payload: articles
});

export const postFavorite = articleId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(articleId));
    }, 1000);
};

export const addFavorite = articleId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: articleId
});

export const deleteFavorite = articleId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: articleId
});