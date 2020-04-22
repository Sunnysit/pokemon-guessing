import React from 'react';
import { GalleryPokemon } from '../type/types';
import { Col, Card, Typography } from 'antd';

const PokemonGalleryCard: React.FC<GalleryPokemon> = ({
  name,
  image,
  types,
  number,
}) => {
  const { Title } = Typography;

  return (
    <Col xs={12} md={6} span={6}>
      <Card
        title={number}
        cover={
          <img className='pokemon-gallery-card-cover' alt={name} src={image} />
        }
      >
        <div className='pokemon-card-content'>
          <Title level={4}>{name}</Title>
          <p className='pokemon-type'>{types.join(', ')}</p>
        </div>
      </Card>
    </Col>
  );
};

export default PokemonGalleryCard;
