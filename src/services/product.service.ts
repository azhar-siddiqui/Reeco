import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstants } from "../constants/AppConstants";
import { Product } from "../@types/products/product";

export const productService = createApi({
  reducerPath: "productsService",
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstants?.BaseUrl,
  }),
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
    }),
    updateProductService: builder.mutation<Product, Partial<Product>>({
      query: ({ id, ...product }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: product,
      }),
    }),
  }),
});

export const { useProductServiceQuery, useUpdateProductServiceMutation } =
  productService;
