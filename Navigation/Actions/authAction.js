import * as ActionTypes from './Types';

import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const login = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: client.post('/users', { email, password })
        });
    };
}
