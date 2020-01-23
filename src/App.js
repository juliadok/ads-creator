import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import MainContainer from './components/Main/MainContainer';

function App({ state }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container>
      <MainContainer state={state} />
    </Container>
  );
}

export default App;
