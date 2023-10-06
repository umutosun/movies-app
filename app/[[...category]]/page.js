import React from "react";
import HomeContainer from "@/containers/home";

import {
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
} from "@/services/movies";

async function Home({ params }) {
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 8) : [],
      }}
    />
  );
}
export default Home;
