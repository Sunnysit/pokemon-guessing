import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <nav>
        <ul className='app-navigation'>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/gallery'>Gallery</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderContent;
