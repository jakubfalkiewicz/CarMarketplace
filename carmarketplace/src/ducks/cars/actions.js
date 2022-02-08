import types from './types'
import axios from 'axios'

export const getCarsListAction = (cars) => ({
    type: types.GET_CARS_LIST,
    payload: cars
})

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

export const addOwnerAction = (car) => ({
    type: types.ADD_OWNER,
    payload: car
})


export const getCarsList = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/api/cars/');
        const cars = response.data
        dispatch(getCarsListAction(cars))
    }
}


export const createCar = (car) => {
    return async dispatch => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/cars/',
            data: car,
        }).then((response) => {
            dispatch(createCarAction(response.data));
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
            dispatch(editCarAction(response.data));
        }).catch((error) => console.log(error));
    }
}

export const deleteCar = (car) => {
    return async dispatch => {
        const response = await axios.delete(`http://localhost:5000/api/cars/${car.id}`);
        const carToDelete = response.data
        dispatch(deleteCarAction(carToDelete))
    }
}


export const filterCarsList = (filters) => {
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/api/cars/');
        const cars = response.data
        const wheelDriveFilter = filters.wheel_drive ? cars.filter(car => car.wheel_drive === filters.wheel_drive) : cars
        const gearboxFilter = filters.gearbox ? cars.filter(car => car.gearbox === filters.gearbox) : cars
        const fuelTypeFilter  = filters.fuel_type ? cars.filter(car => car.fuel_type === filters.fuel_type) : cars
        const minPriceFilter = filters.min_price ? cars.filter(car => filters.min_price < car.price) : cars
        const maxPriceFilter = filters.max_price ? cars.filter(car => filters.max_price > car.price) : cars
        const minProductionYearFilter = filters.min_production_year ? cars.filter(car => filters.min_production_year < car.production_year) : cars
        const maxProductionYearFilter = filters.max_production_year ? cars.filter(car => filters.max_production_year > car.production_year) : cars
        const minMileageFilter = filters.min_mileage ? cars.filter(car => filters.min_mileage < car.mileage) : cars
        const maxMileageFilter = filters.max_mileage ? cars.filter(car => filters.max_mileage > car.mileage) : cars
        const minEngineSizeFilter = filters.min_engine_size ? cars.filter(car => filters.min_engine_size < car.engine_size) : cars
        const maxEngineSizeFilter = filters.max_engine_size ? cars.filter(car => filters.max_engine_size > car.engine_size) : cars
        const minHorsePowerFilter = filters.min_horse_power ? cars.filter(car => filters.min_horse_power < car.horse_power) : cars
        const maxHorsePowerFilter = filters.max_horse_power ? cars.filter(car => filters.max_horse_power > car.horse_power) : cars
        const filteredArray = gearboxFilter.filter(car => (wheelDriveFilter.includes(car) && fuelTypeFilter.includes(car) && minPriceFilter.includes(car)
        && maxPriceFilter.includes(car) && minProductionYearFilter.includes(car) && maxProductionYearFilter.includes(car) && minMileageFilter.includes(car)
        && maxMileageFilter.includes(car) && minEngineSizeFilter.includes(car) && maxEngineSizeFilter.includes(car) && minHorsePowerFilter.includes(car) && maxHorsePowerFilter.includes(car)));
        if(filteredArray.length === 0){alert("There is no such car in database")}
        dispatch(filterCarsListAction(filteredArray))
    }
}

export const sortCarsList = (filter) => {
    return async dispatch => {
        const cars = filter.store
        function newestFirst(a, b) {return (b.upload_date < a.upload_date) ? -1 : ((b.upload_date > a) ? 1 : 0)}
        function priceDesc(a, b) {return b.price - a.price}
        function priceAsc(a, b) {return a.price - b.price}
        function mileageDesc(a, b) {return b.mileage - a.mileage}
        function mileageAsc(a, b) {return a.mileage - b.mileage}
        function powerDesc(a, b) {return b.horse_power - a.horse_power}
        function powerAsc(a, b) {return a.horse_power - b.horse_power}
        function filtered(filter){
            if (filter.filter === "newest"){cars.sort(newestFirst)}
            if (filter.filter === "price_asc"){cars.sort(priceAsc)}
            if (filter.filter === "price_desc"){cars.sort(priceDesc)}
            if (filter.filter === "mileage_asc"){cars.sort(mileageAsc)}
            if (filter.filter === "mileage_desc"){cars.sort(mileageDesc)}
            if (filter.filter === "power_asc"){cars.sort(powerAsc)}
            if (filter.filter === "power_desc"){cars.sort(powerDesc)}
            if (filter.filter === "title"){cars.sort((a, b) => a.title.localeCompare(b.title))} 
        }
        filtered(filter)
        dispatch(sortCarsListAction(cars))
    }
}

//const cars_filtered = cars.filter(car => filters.gearbox ? car.gearbox === filters.gearbox : car && 
//filters.wheel_drive ? car.wheel_drive === filters.wheel_drive : car && filters.fuel_type ? car.fuel_type === filters.fuel_type : car)