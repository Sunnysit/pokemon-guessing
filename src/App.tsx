import React from 'react';
import { Layout } from 'antd';
import './App.css';

import Main from './container/Main';
import HeaderContent from './container/HeaderContent';
import FooterContent from './container/FooterContent';

function App() {
  const { Content } = Layout;

  return (
    <div className='App'>
      <HeaderContent />
      <Content>
        <Main />
      </Content>
      <FooterContent />
    </div>
  );
}

export default App;
