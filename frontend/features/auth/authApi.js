import apiSlice from "@/features/api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUserByExpress: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      })
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      })
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      })
    }),
    updateUser: builder.mutation({
      query: ({id, user}) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: user,
      })
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      })
    }),
  }),
});

export const { useCreateUserByExpressMutation, useGetAllUsersQuery, useGetUserByIdQuery, useUpdateUserMutation, useDeleteUserMutation } = authApi;
