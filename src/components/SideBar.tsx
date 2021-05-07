import React from "react";
import Genre from "../interfaces/genre";
import { Button } from "./Button";

type SideBarProps = {
  selectedGenreId: number,
  genres: Genre[],
  handleClickButton: (id: number) => void
}

export function SideBar({ genres, selectedGenreId, handleClickButton }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Best<p>Flix</p> <img src="/images/popcorn.svg" alt="BestFlix" />
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
