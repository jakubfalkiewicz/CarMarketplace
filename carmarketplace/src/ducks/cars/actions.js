import types from './types'
import axios from 'axios'

export const getCarsListAction = (cars) => ({
    type: types.CAR_LIST,
    payload: cars
});

export const createCar = (car) => ({
    type: types.CAR_CREATE,
    payload: car
});

export const deleteCar = (car) => ({
    type: types.CAR_DELETE,
    payload: car
});

export const filterCarsList = (filter) => ({
    type: types.CAR_LIST_FILTER,
    payload: filter
});

export const getCarsList = (filters) => {
    console.log(filters.gearbox)
    console.log(filters.wheel_drive)
    console.log(filters.fuel_type)
    console.log(filters.min_price)
    console.log(filters.max_price)
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/api/cars/');
        const cars = response.data
        const gearbox_filter = cars.filter(car => car.gearbox === filters.gearbox)
        const wheel_drive_filter = cars.filter(car => car.wheel_drive === filters.wheel_drive)
        console.log(gearbox_filter)
        console.log(wheel_drive_filter)
        dispatch(getCarsListAction(gearbox_filter))
    }
}

//const cars_filtered = cars.filter(car => filters.gearbox ? car.gearbox === filters.gearbox : car && 
//filters.wheel_drive ? car.wheel_drive === filters.wheel_drive : car && filters.fuel_type ? car.fuel_type === filters.fuel_type : car)