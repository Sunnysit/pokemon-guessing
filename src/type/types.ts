import { ReactEventHandler } from 'react';

export type Pokemon = {
  name: string;
  id: string;
  image: string;
};
export type PokemonProp = {
  pokemon: Pokemon;
  handleCardClick: (id: string) => boolean;
};

export type QuestionProp = {
  pokemon: Pokemon;
};
