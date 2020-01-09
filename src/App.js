import React from 'react';
import './App.css';
import Preview from './components/Preview/Preview.js'
import { Container, Row, Col } from 'react-bootstrap';
import MainContainer from './components/Main/MainContainer';

function App(props) {
  return (
    <Container >
      <Row>
        <Col xs = {9}>
            <MainContainer state = {props.state}/>
        </Col>
        <Col xs = {1}></Col>
        <Col xs = {2}>
          <Preview />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
