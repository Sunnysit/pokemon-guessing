import React from 'react';
import shortid from 'shortid';
import { Pokemon } from '../type/types';
import { Row } from 'antd';
import PokemonCard from './PokemonCard';

type PokemonsProp = {
  pokemons: Array<Pokemon>;
  handleCardClick: (id: string) => boolean;
};

const Pokemons: React.FC<PokemonsProp> = ({ pokemons, handleCardClick }) => {
  const renderPokemons = pokemons.map((pokemon: Pokemon) => {
    return (
      <PokemonCard
        key={shortid.generate()}
        pokemon={pokemon}
        handleCardClick={handleCardClick}
      />
    );
  });

  return (
    <div>
      <Row justify='center' className='pokemon-list' gutter={16}>
        {renderPokemons}
      </Row>
    </div>
  );
};

export default Pokemons;
