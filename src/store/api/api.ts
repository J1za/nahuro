import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RESUCER_QUERIES_PATH, BASE_URL } from '../constants';

// TODO: Update baseUrl using env
const baseUrl = process.env.NODE_ENV === 'development' ? `http://nahuro.com${BASE_URL}` : BASE_URL;
// const baseUrl = process.env.NODE_ENV === 'development' ? `http://localhost:3077${BASE_URL}` : BASE_URL;

export const api = createApi({
  reducerPath: RESUCER_QUERIES_PATH,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({})
});
