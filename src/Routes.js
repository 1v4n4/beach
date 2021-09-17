import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Beach from './components/Beach';
// import Footer from './components/Footer';
// import Header from './components/Header';
import App from './components/App';
import Header from './components/Header';

const Routes = () => (

  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/beach/:beach" component={Beach} />
    </Switch>

  </BrowserRouter>
);

export default Routes;
