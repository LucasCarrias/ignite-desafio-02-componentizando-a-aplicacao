import React from "react";
import Movie from "../interfaces/movie";
import { MovieCard } from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
}

export function MoviesList({movies} : MovieListProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
