import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Template from './Template/Template';

const TemplatesBar = ({ templates, setAd }) => {
  return (
    <>
      <Row>
        {templates.map((ad, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Template ad={ad} key={index} onClick={setAd} />
        ))}
      </Row>
      <Row>
        <Col>
          <Link to="/text">
            <Button variant="dark" as="span">
              Choose
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default TemplatesBar;
