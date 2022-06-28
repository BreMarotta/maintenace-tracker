import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ownerApi = createApi({
    reducerPath: 'ownerApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        signup: builder.query({
            query: (username, password) => `signup/${username, password}`,
        }),
    }),
})

export const { useSignup } = ownerApi