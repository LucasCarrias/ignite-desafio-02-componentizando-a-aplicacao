import { Star, Clock, Calendar, Flag, User } from "react-feather";

import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  year: string;
  director: string;
  country: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <figure>
        <img src={props.poster} alt={props.title} />
        <figcaption>
            
            <div>
              <Flag/> {props.country}
            </div>
            <div>
              <Calendar/> {props.year}
            </div>
            <div>
              <User/> {props.director}
            </div>
            
        </figcaption>
      </figure>

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star />{props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
