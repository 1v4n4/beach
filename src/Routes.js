import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Beach from './components/Beach';
import Home from './components/Home';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
import Header from './components/Header';
import Favourites from './components/Favourites';
import { getUser } from './localStorage';
import { checkUser } from './actions/userActions';
import { getFavs } from './actions/favsActions';

const Routes = () => {
  const dispatch = useDispatch();
  const FetchUser = () => {
    const result = getUser() || {};
    if (result.id) {
      dispatch(checkUser(result));
      const userid = result.id;
      dispatch(getFavs(userid));
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beach/:beach" component={Beach} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/favourites" component={Favourites} />
      </Switch>

    </BrowserRouter>
  );
};
export default Routes;
