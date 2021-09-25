import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Container, Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../localStorage';
import { logoutUser } from '../actions/logOutActions';
import { checkUser } from '../actions/userActions';
import Logged from './Logged';
import '../CSS/header.css';

const Header = () => {
  const dispatch = useDispatch();

  const result = getUser() || {};
  const { id } = result;
  const FetchUser = () => {
    if (result.id) {
      dispatch(checkUser(result));
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);
  const user = useSelector((state) => state.user);
  const isLogged = user.logged;

  const handleClick = () => {
    setUser(null);
    dispatch(logoutUser());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#home"><Link className="text-dark fs-3" to="/">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { !isLogged
          && <Link className="nav-link text-center bg-light log" to="/login">Log In</Link> }
            { !isLogged && <Link className="nav-link text-center bg-light log" to="/signup">Sign Up</Link> }
            { isLogged
          && <Logged id={id} /> }
            { isLogged && <Button className="nav-link bg-light log" onClick={handleClick}>Log Out</Button> }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
