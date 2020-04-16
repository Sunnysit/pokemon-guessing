import React from 'react';
import { Typography } from 'antd';
import { QuestionProp } from '../type/types';

const Question: React.FC<QuestionProp> = ({ pokemon }) => {
  const { Title } = Typography;

  return (
    <div>
      <Title level={2}>Which one is {pokemon.name}?</Title>
    </div>
  );
};

export default Question;
