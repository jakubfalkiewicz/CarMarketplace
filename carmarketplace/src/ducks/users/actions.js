import types from './types'
import axios from 'axios'

export const getUsersListAction = (users) => ({
    type: types.GET_USERS_LIST,
    payload: users
})

export const filterUsersListAction = (users) => ({
    type: types.USER_LIST_FILTER,
    payload: users
});

export const createUserAction = (user) => ({
    type: types.USER_CREATE,
    payload: user
});

export const editUserAction = (user) => ({
    type: types.USER_EDIT,
    payload: user
});

export const deleteUserAction = (user) => ({
    type: types.USER_DELETE,
    payload: user
});

export const sortUsersListAction = (users) => ({
    type: types.USER_LIST_SORT,
    payload: users
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

export const editUser = (user) => {
    return async dispatch => {
        axios({
            method: 'put',
            url: `http://localhost:5000/api/persons/${user.id}`,
            data: user,
            }).then((response) => {
                dispatch(editUserAction(response.data));
            }).catch((error) => console.log(error));
    }
}

export const deleteUser = (user) => {
    console.log(user)
    return async dispatch => {
        const response = await axios.delete(`http://localhost:5000/api/persons/${user.id}`);
        const userToDelete = response.data
        dispatch(deleteUserAction(userToDelete))
    }
}

export const sortUsersList = (filter) => {
    return async dispatch => {
        const users = filter.store
        const cars = filter.cars
        function newestFirst(a, b) {return (b.upload_date < a.upload_date) ? -1 : ((b.upload_date > a) ? 1 : 0)}
        function usersAsc(a, b) {return cars.filter(car => car.owner_id === a.id).length - cars.filter(car => car.owner_id === b.id).length}
        function usersDesc(a, b) {return cars.filter(car => car.owner_id === b.id).length - cars.filter(car => car.owner_id === a.id).length}
        function filtered(filter){
            if (filter.filter === "newest"){users.sort(newestFirst)}
            if (filter.filter === "cars_asc"){users.sort(usersAsc)}
            if (filter.filter === "cars_desc"){users.sort(usersDesc)}
            if (filter.filter === "name"){users.sort((a, b) => a.first_name.localeCompare(b.first_name))} 
        }
        filtered(filter)
        dispatch(sortUsersListAction(users))
    }
}