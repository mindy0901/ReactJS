import axios from 'axios';

export const baseURL = 'http://localhost:4000';

export const instance = axios.create({
    baseURL: baseURL,
});

export const createProduct = (product) => instance.post('/api/products', product);

export const getProducts = () => instance.get('/api/products');

export const signup = () => instance.post('/auth/signup');

export const signin = (data) => instance.post('/auth/signin', data);

export const refreshToken = (token) =>
    instance.post('/auth/refresh_token', { refresh_token: token });

export const getUsers = () => instance.get('/api/users');
