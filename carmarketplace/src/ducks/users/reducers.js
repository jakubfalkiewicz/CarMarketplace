import types from "./types"

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
		case types.USER_LIST_FILTER:
			return action.payload
        case types.USER_CREATE:
            return [...state,action.payload]
        case types.USER_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)]
        default:
            return state
    }
}

const initialState = 
[
	{
		"id":"fb0baa8c-e63b-4108-ad96-eeefb4292c86",
		"first_name":"Paweł",
		"last_name":"Jumper",
		"mail":"pawelj@example.com",
		"phone":"+48123456789",
		"city":"Gdańsk"
	},
	{
		"id":"5508763b-a9ff-49a8-b65b-52bd05344d0b",
		"first_name":"Jan",
		"last_name":"Kowalski",
		"mail":"kowalskij@example.com",
		"phone":"+48123456789",
		"city":"Gdynia"
	},
	{
		"id":"345670f4-f05b-475c-884a-50e8ebe31182",
		"first_name":"Anna",
		"last_name":"Nowak",
		"mail":"annaj@example.com",
		"phone":"+48123456789",
		"city":"Sopot"
	},
	{
		"id":"9f58e6c0-74d5-42cc-9f52-5acdea16ba52",
		"first_name":"Jamal",
		"last_name":"Johnson",
		"mail":"jamalj@example.com",
		"phone":"+48123456789",
		"city":"Wejcherowo"
	},
	{
		"id":"34242842-1b3e-4d9c-8cb6-98f87a66dc89",
		"first_name":"Siergiej",
		"last_name":"Yarmolenko",
		"mail":"siergiejj@example.com",
		"phone":"+48123456789",
		"city":"Gdynia"
	},
]

export default usersReducer