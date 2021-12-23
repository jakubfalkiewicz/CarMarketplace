import types from './types'

export const createCar = (car) => ({
    type: types.CAR_CREATE,
    payload: car
});

export const deleteCar = (car) => ({
    type: types.CAR_DELETE,
    payload: car
});