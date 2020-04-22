import { ReactEventHandler } from 'react';

export type Pokemon = {
  name: string;
  id: string;
  image: string;
};

export type GalleryPokemon = {
  id: string;
  name: string;
  image: string;
  types: Array<string>;
  number: string;
};

export type PokemonProp = {
  pokemon: Pokemon;
  handleCardClick: (id: string) => boolean;
};

export type QuestionProp = {
  pokemon: Pokemon;
};
