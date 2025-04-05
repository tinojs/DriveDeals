import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users/me';

export const getUser = async () => {
    const result = await request.get(`${baseUrl}`);

    return result;
}