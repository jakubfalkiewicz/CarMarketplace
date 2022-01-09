import types from "./types"

const usersReducer = (state = [], action) => {
    switch(action.type) {
		case types.GET_USERS_LIST:
			return [...action.payload]
		case types.USER_LIST_SORT:
			return [...action.payload]
        case types.USER_CREATE:
            return [...state,action.payload]
		case types.USER_EDIT:
			return [...state.map(user => user.id !== action.payload.id ? user : action.payload)]
        case types.USER_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)]
        default:
            return state
    }
}

const initialState = 
[
	{
		"id":2,
		"first_name":"Paweł",
		"last_name":"Jumper",
		"mail":"pawelj@example.com",
		"phone":"+48123456789",
		"city":"Gdańsk"
	},
	{
		"id":3,
		"first_name":"Jan",
		"last_name":"Kowalski",
		"mail":"kowalskij@example.com",
		"phone":"+48123456789",
		"city":"Gdynia"
	},
	{
		"id":4,
		"first_name":"Anna",
		"last_name":"Nowak",
		"mail":"annaj@example.com",
		"phone":"+48123456789",
		"city":"Sopot"
	},
	{
		"id":5,
		"first_name":"Jamal",
		"last_name":"Johnson",
		"mail":"jamalj@example.com",
		"phone":"+48123456789",
		"city":"Wejcherowo"
	},
	{
		"id":6,
		"first_name":"Siergiej",
		"last_name":"Yarmolenko",
		"mail":"siergiejj@example.com",
		"phone":"+48123456789",
		"city":"Gdynia"
	},
]

export default usersReducer