import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstants } from "../constants/AppConstants";
import { Product } from "../@types/products/product";

export const productService = createApi({
  reducerPath: "productsService",
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstants?.BaseUrl,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    productService: builder.query<
      Product[],
      {
        query: string;
      }
    >({
      query: ({ query }) => ({
        url: `/products${query && `?q=${query}`}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    updateProductService: builder.mutation<Product, Partial<Product>>({
      query: ({ id, ...product }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useProductServiceQuery, useUpdateProductServiceMutation } =
  productService;
