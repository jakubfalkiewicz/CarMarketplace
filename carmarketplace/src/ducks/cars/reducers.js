import types from "./types"

const carsReducer = (state = [], action) => {
    switch(action.type) {
		case types.GET_CARS_LIST:
			return [...action.payload]
		case types.CAR_LIST_SORT:
			return [...action.payload]
		case types.CAR_LIST_FILTER:
			return [...action.payload]
        case types.CAR_CREATE:
            return [...state,action.payload]
		case types.ADD_OWNER:
			return [...state.map(car => car.id !== action.payload.id ? car : {...car,owner_id: action.payload.id} )]
		case types.CAR_EDIT:
			return [...state.map(car => car.id !== action.payload.id ? car : action.payload)]
        case types.CAR_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)]
        default:
            return state
    }
}


export default carsReducer