import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `https://app-api.selly.vn/products/suggestion?limit=20&page=0&category=suggestion`,
      providesTags:['Products']
    }),
    getProductByCatogories: builder.query({
      query: (categoryId,page) => `https://app-api.selly.vn/products?limit=20&page=${page}&sort=top_sale&city=&category=${categoryId}`,
      providesTags:['ProductsByCategories']
    }),
    getProductType: builder.query({
      query: ({ type, query }) => `https://shofy-backend.vercel.app/api/product/${type}?${query}`,
      providesTags:['ProductType']
    }),
    getOfferProducts: builder.query({
      query: (type) => `https://shofy-backend.vercel.app/api/product/offer?type=${type}`,
      providesTags:['OfferProducts']
    }),
    getPopularProductByType: builder.query({
      query: (type) => `https://shofy-backend.vercel.app/api/product/popular/${type}`,
      providesTags:['PopularProducts']
    }),
    getTopRatedProducts: builder.query({
      query: () => `https://shofy-backend.vercel.app/api/product/top-rated`,
      providesTags:['TopRatedProducts']
    }),
    // get single product
    getProduct: builder.query({
      query: (id) => `https://app-api.selly.vn/products/${id}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
      invalidatesTags: (result, error, arg) => [
        { type: "RelatedProducts", id:arg },
      ],
    }),
    // get related products
    getRelatedProducts: builder.query({
      query: (id) => `https://shofy-backend.vercel.app/api/product/related-product/${id}`,
      providesTags: (result, error, arg) => [
        { type: "RelatedProducts", id: arg },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetProductByCatogoriesQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
