const { default: apiSlice } = require("../api/apiSlice");

const cityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => ({
        url: '/cities',
        method: 'GET',
      })
    }),
    getCityById: builder.query({
      query: (id) => ({
        url: `/cities/${id}`,
        method: 'GET',
      })
    }),
  }),
});

export const { useGetCitiesQuery, useGetCityByIdQuery } = cityApi;