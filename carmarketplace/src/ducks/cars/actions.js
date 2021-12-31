import types from './types'
import axios from 'axios'

export const filterCarsListAction = (cars) => ({
    type: types.CAR_LIST_FILTER,
    payload: cars
});

export const sortCarsListAction = (cars) => ({
    type: types.CAR_LIST_SORT,
    payload: cars
});

export const createCarAction = (car) => ({
    type: types.CAR_CREATE,
    payload: car
});

export const editCarAction = (car) => ({
    type: types.CAR_EDIT,
    payload: car
});

export const deleteCarAction = (car) => ({
    type: types.CAR_DELETE,
    payload: car
});

export const createCar = (car) => {
    return async dispatch => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/cars/',
            data: car,
            }).then((response) => {
                dispatch(createCarAction(response.data)); console.log(response)
            }).catch((error) => console.log(error));
    }
}

export const editCar = (car) => {
    return async dispatch => {
        axios({
            method: 'put',
            url: `http://localhost:5000/api/cars/${car.id}`,
            data: car,
            }).then((response) => {
                dispatch(editCarAction(response.data)); console.log(response)
            }).catch((error) => console.log(error));
    }
}

export const deleteCar = (car) => {
    console.log("DELETING")
    console.log(car.id)
    return async dispatch => {
        console.log("AXIOS")
        await axios.delete(`http://localhost:5000/api/cars/${car.id}`)
        .then((response) => {dispatch(deleteCarAction(response.data)); console.log(response)})
        .catch((error) => console.log(error))
    }
}

export const filterCarsList = (filters) => {
    // console.log(filters.gearbox)
    // console.log(filters.wheel_drive)
    // console.log(filters.fuel_type)
    // console.log(filters.min_price)
    // console.log(filters.max_price)
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/api/cars/');
        const cars = response.data
        const gearbox_filter = cars.filter(car => car.gearbox === filters.gearbox)
        const wheel_drive_filter = cars.filter(car => car.wheel_drive === filters.wheel_drive)
        console.log(gearbox_filter)
        console.log(wheel_drive_filter)
        dispatch(filterCarsListAction(gearbox_filter))
    }
}

export const sortCarsList = (filter) => {
    console.log(filter)
    return async dispatch => {
        // const response = await axios.get('http://localhost:5000/api/cars/');
        const cars = filter.store
        console.log(cars)
        // function byTitle(a, b) {return a.title. - b.title}
        function priceDesc(a, b) {return b.price - a.price}
        function priceAsc(a, b) {return a.price - b.price}
        function mileageDesc(a, b) {return b.mileage - a.mileage}
        function mileageAsc(a, b) {return a.mileage - b.mileage}
        function powerDesc(a, b) {return b.horse_power - a.horse_power}
        function powerAsc(a, b) {return a.horse_power - b.horse_power}
        function filtered(filter){
            if (filter.filter === "price_asc"){cars.sort(priceAsc)}
            if (filter.filter === "price_desc"){cars.sort(priceDesc)}
            if (filter.filter === "mileage_asc"){cars.sort(mileageAsc)}
            if (filter.filter === "mileage_desc"){cars.sort(mileageDesc)}
            if (filter.filter === "power_asc"){cars.sort(powerAsc)}
            if (filter.filter === "power_desc"){cars.sort(powerDesc)}
            if (filter.filter === "title"){cars.sort((a, b) => a.title.localeCompare(b.title))} 
        }
        filtered(filter)
        //IF cars IS EMPTY, AXIOS GET CARS !!! 
        console.log(cars)
        dispatch(sortCarsListAction(cars))
    }
}

//const cars_filtered = cars.filter(car => filters.gearbox ? car.gearbox === filters.gearbox : car && 
//filters.wheel_drive ? car.wheel_drive === filters.wheel_drive : car && filters.fuel_type ? car.fuel_type === filters.fuel_type : car)