import types from './types'
import axios from 'axios'

export const filterUsersListAction = (users) => ({
    type: types.USER_LIST_FILTER,
    payload: users
});

export const createUser = (user) => ({
    type: types.USER_CREATE,
    payload: user
});

export const deleteUser = (user) => ({
    type: types.USER_DELETE,
    payload: user
});