import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const getUser = async (userId) => {
    const result = await request.get(`${baseUrl}/${userId}`);

    return result;
}