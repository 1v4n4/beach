import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Container, Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../localStorage';
import { logoutUser } from '../actions/logOutActions';
import { checkUser } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const FetchUser = () => {
    const result = getUser() || {};
    if (result.id) {
      dispatch(checkUser(result));
    }
  };

  useEffect(() => {
    FetchUser();
  }, [user]);

  const isLogged = user.logged;

  const handleClick = () => {
    setUser(null);
    dispatch(logoutUser());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#home"><Link to="/">Cal Beach</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { !isLogged
          && <Link className="nav-link" to="/login">Log In</Link> }
            { !isLogged && <Link className="nav-link" to="/signup">Sign Up</Link> }
            { isLogged
          && (
          <h2 className="nav-link">
            Loged in as:
            {user.data.name}
          </h2>
          ) }
            { isLogged && <Button className="nav-link" onClick={handleClick}>Log Out</Button> }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
