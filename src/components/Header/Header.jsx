import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <b>Template</b>Creator
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
