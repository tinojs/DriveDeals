import { useEffect, useState } from 'react';
import * as CarService from '../services/CarService'

export function useCar(initialCars, submitHandler) {
    const [cars, setCars] = useState(initialCars);

    const onChange = (e) => {
        setCars(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    }

    async function getCarData() {
        try {
            const carResult = await CarService.getAllCars()
            setCars([...initialCars, ...carResult])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        try {
            getCarData();
        }
        catch (error) {
            console.log(error);
        }
    }, [])

    return {
        cars,
        onChange,
        onSubmit,
    }
}