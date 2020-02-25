import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <b>Template</b>Creator
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
