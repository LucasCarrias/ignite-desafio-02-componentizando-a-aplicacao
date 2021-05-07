import Genre from "../interfaces/genre";
import Movie from "../interfaces/movie";
import { MoviesList } from "./MoviesList";

interface ContentProps {
  movies: Movie[];
  selectedGenre: Genre;
}

export function Content({movies, selectedGenre}: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>
      <hr/>
      <MoviesList movies={movies}/>
    </div>
  );
}
