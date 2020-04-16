import React from 'react';
import { Layout, Typography } from 'antd';

const HeaderContent = () => {
  const { Header } = Layout;
  const { Title } = Typography;
  return (
    <Header>
      <img
        src={process.env.PUBLIC_URL + '/assets/img/pokemon-logo.svg'}
        alt='Pokemon logo'
        className='pokemon-logo'
      />
      <Title className='title' level={1}>
        Guessing Game
      </Title>
    </Header>
  );
};

export default HeaderContent;
