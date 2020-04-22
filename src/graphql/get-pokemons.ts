import { gql } from 'apollo-boost';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`;

export const GET_POKEMONS_WITH_TYPES = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      number
    }
  }
`;
