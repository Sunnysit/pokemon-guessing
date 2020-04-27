import React from 'react';
import { Typography } from 'antd';

const AboutView = () => {
  const { Title, Paragraph } = Typography;

  return (
    <main className='main-content'>
      <Title level={2}>About</Title>
      <article className='info-container'>
        <Paragraph className='description'>
          This project is only for educational purposes and cannot be used for
          commercial purposes. It provides a simple example to demonstrate how
          React.js interacts with the GraphQL server.
        </Paragraph>
        <Title level={4}>Credits</Title>
        <Paragraph className='description'>
          The Pokemon GraphQL server is from Lucas Bento's Github Repo, thank
          you for sharing the Pokemon data. His repo link is{' '}
          <a
            target='blank'
            href='https://github.com/lucasbento/graphql-pokemon'
          >
            lucasbento/graphql-pokemon
          </a>
          .
        </Paragraph>
        <Paragraph className='description'>
          I get inspiration from a youtube tutorial and that's why I built this
          mini game. Thanks to Karl Hadwen as well. The tutorial link is{' '}
          <a target='blank' href='https://www.youtube.com/watch?v=yKFoAF7J0mc'>
            Karl Hadwen: Build a Pokemon App | React & GraphQL Tutorial
          </a>
          .
        </Paragraph>
      </article>
    </main>
  );
};

export default AboutView;
