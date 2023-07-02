// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/v1/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "authorization",
        `bearer ${String(localStorage.getItem("token"))}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, string>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
    getJobListing: builder.query({
      query: () => ({
        url: "job/listings",
        // headers: {
        //   Cookie:
        //     "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTAwZWI0ZGRiOThmNTM5YjAwNWQyMyIsImlhdCI6MTY4ODIxMTEyNCwiZXhwIjoxNjkwODAzMTI0fQ.IH9-Awy2gcneoqZnFTtGyU25pHDnkwPDayPXR7hLGuQ",
        // },
        // credentials: "include",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation, useGetJobListingQuery } =
  mainApi;
