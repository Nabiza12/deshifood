import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const apiSlice = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://deshifood-zbcn-4y9hx34p8-hadidbilla.vercel.app/api' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Cities', 'Orders','Users'],
  endpoints: (builder) => ({}),
})

export default apiSlice;