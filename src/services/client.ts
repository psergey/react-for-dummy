import axios, { CreateAxiosDefaults } from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const createAxiosClient = (options: CreateAxiosDefaults) => {
  const client = axios.create(options);

  return client;
};

export const client = createAxiosClient({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
});
