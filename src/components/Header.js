import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Container, Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../localStorage';
import { logoutUser } from '../actions/logOutActions';
import { checkUser } from '../actions/userActions';

const counties = ['Humboldt', 'Mendocino',
  'Sonoma', 'Marin', 'San Francisco', 'San Mateo', 'Santa Cruz', 'Monterey', 'San Luis Obispo', 'Santa Barbara', 'Ventura', 'Los Angeles', 'Orange', 'San Diego'];

const Header = () => {
  const dispatch = useDispatch();
  const FetchUser = () => {
    const result = getUser() || {};
    console.log('from routes', result);
    if (result.id) {
      dispatch(checkUser(result));
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  const user = useSelector((state) => state.user);

  console.log('user from header', user);
  let isLogged = user.logged;

  const handleClick = () => {
    setUser(null);
    isLogged = false;
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
            <NavDropdown title="Choose county" id="basic-nav-dropdown">
              {counties.map((county) => (
                <NavDropdown.Item to="#action/3.1" key={county} onClick>{county}</NavDropdown.Item>))}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
