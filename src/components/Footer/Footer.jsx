import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="bg-dark text-light py-3 mt-3">
      <Container className="clearfix">
        <div className="float-left pr-3">&copy; 2020 Julia Dokolina. All rights reserved.</div>
      </Container>
    </div>
  );
};

export default Footer;
