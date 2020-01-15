import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Preview from './components/Preview/Preview';
import MainContainer from './components/Main/MainContainer';

function App({ state }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container>
      <Row>
        <Col xs={9}>
          <MainContainer state={state} />
        </Col>
        <Col xs={1} />
        <Col xs={2}>
          <Preview />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
