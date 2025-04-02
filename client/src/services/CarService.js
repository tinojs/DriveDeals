import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOneCar = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);

    return result;
};

export const createCar = async (carData) => {
    const result = await request.post(baseUrl, carData);

    return result;
};

export const editCar = async (carId, carData) => {
    const result = await request.put(`${baseUrl}/${carId}`, carData);

    return result;
};

export const deleteCar = async (carId) => {
    const result = await request.del(`${baseUrl}/${carId}`);

    return result;
};