import types from './types'
import axios from 'axios'

export const getUsersListAction = (cars) => ({
    type: types.GET_USERS_LIST,
    payload: cars
})

export const filterUsersListAction = (users) => ({
    type: types.USER_LIST_FILTER,
    payload: users
});

export const createUserAction = (user) => ({
    type: types.USER_CREATE,
    payload: user
});

export const deleteUser = (user) => ({
    type: types.USER_DELETE,
    payload: user
});

export const getUsersList = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/api/persons/');
        const users = response.data
        dispatch(getUsersListAction(users))
    }
}


export const createUser = (user) => {
    return async dispatch => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/persons/',
            data: user,
            }).then((response) => {
                dispatch(createUserAction(response.data));
            }).catch((error) => console.log(error));
    }
}