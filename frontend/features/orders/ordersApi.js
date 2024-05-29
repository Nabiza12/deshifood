const { default: apiSlice } = require("../api/apiSlice");

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: '/orders',
        method: 'GET',
      }),
      providesTags: ["Orders"]
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'GET',
      })
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ["Orders"]
    }),
    updateOrder: builder.mutation({
      query: ({id, order}) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        body: order,
      }),
      invalidatesTags: ["Orders"]
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Orders"]
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderByIdQuery, useCreateOrderMutation, useUpdateOrderMutation, useDeleteOrderMutation } = orderApi;