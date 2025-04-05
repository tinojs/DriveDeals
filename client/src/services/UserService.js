import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const getUser = async () => {
    const result = await request.get(`${baseUrl}/me`);

    return result;
}

export const editUser = async (userId, userData) => {
    const result = await request.put(`${baseUrl}/${userId}`, userData);

    return result;
}