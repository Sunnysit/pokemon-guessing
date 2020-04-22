import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

import Main from './container/Main';
import HeaderContent from './container/HeaderContent';
import FooterContent from './container/FooterContent';
import AboutView from './views/AboutView';
import GalleryView from './views/GalleryView';

function App() {
  const { Content } = Layout;

  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <HeaderContent />
          <Content>
            <Switch>
              <Route path='/about' component={AboutView} />
              <Route path='/gallery' component={GalleryView} />
              <Route exact path='/' component={Main} />
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </Content>
        </div>
        <FooterContent />
      </Router>
    </div>
  );
}

export default App;
