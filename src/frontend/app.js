import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout.jsx'
import Home from './components/Home.jsx'
import NotFound from './containers/NotFound.jsx'

import './index.css'

const App = () => (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
  
  export default App;