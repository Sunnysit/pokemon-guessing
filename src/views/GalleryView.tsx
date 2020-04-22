import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS_WITH_TYPES } from '../graphql/get-pokemons';

import { Typography, Row } from 'antd';
import { GalleryPokemon } from '../type/types';
import Loading from '../shared/Loading';
import BackTopBtn from '../shared/BackTopBtn';
import PokemonGalleryCard from '../components/PokemonGalleryCard';

const GalleryView = () => {
  const { Title } = Typography;
  const numberOfPokemon: number = 151;

  const { loading, error, data = { pokemons: [] } } = useQuery(
    GET_POKEMONS_WITH_TYPES,
    {
      variables: { first: numberOfPokemon },
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const pokemonsData: Array<GalleryPokemon> = data.pokemons;

  const renderPokemonList = pokemonsData.map((pokemon) => {
    return (
      <PokemonGalleryCard
        key={pokemon.id}
        number={pokemon.number}
        types={pokemon.types}
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.image}
      />
    );
  });

  return (
    <div className='main-content'>
      <Title level={2}>Pokemon Gallery</Title>
      <section className='pokemon-list'>
        <Row gutter={[16, 16]}>{renderPokemonList}</Row>
      </section>
      <BackTopBtn />
    </div>
  );
};

export default GalleryView;
