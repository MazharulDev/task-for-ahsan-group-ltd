import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const MOVIE_URL = "/movies";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    movieCreate: build.mutation({
      query: (movieData) => ({
        url: `${MOVIE_URL}`,
        method: "POST",
        data: movieData,
      }),
      invalidatesTags: [tagTypes.movie],
    }),
    movies: build.query({
      query: () => {
        return {
          url: `${MOVIE_URL}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.movie],
    }),
  }),
});

export const { useMovieCreateMutation, useMoviesQuery } = userApi;
