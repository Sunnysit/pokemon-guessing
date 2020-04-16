import React, { useState } from 'react';
import { Card, Col, Typography } from 'antd';
import { PokemonProp } from '../type/types';

const PokemonCard: React.FC<PokemonProp> = ({ pokemon, handleCardClick }) => {
  const [grayCard, setGrayCard] = useState(false);

  const { Text } = Typography;

  const handleClickCheck = () => {
    const isCorrect = handleCardClick(pokemon.id);
    isCorrect ? setGrayCard(false) : setGrayCard(true);
  };

  let cardClasses = grayCard ? 'pokemon-card gray-card' : 'pokemon-card';

  return (
    <Col xs={12} md={6} span={6}>
      <Card
        className={cardClasses}
        onClick={handleClickCheck}
        cover={
          <img
            className='pokemon-card-cover'
            alt={pokemon.name}
            src={pokemon.image}
          />
        }
      >
        {grayCard ? (
          <Text>{pokemon.name}</Text>
        ) : (
          <Text className='opacity-text'>{pokemon.name}</Text>
        )}
      </Card>
    </Col>
  );
};

export default PokemonCard;
