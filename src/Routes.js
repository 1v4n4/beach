import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Beach from './components/Beach';
import App from './components/App';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/beach/:beach" component={Beach} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>

  </BrowserRouter>
);
export default Routes;
