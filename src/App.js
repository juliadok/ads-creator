import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './components/Main/MainContainer';
import TextContainer from './components/Text/TextContainer';
import FinalPage from './components/Text/FinalPage/FinalPage';

function App({ state }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container>
      <Switch>
        <Route exact path="/" render={() => <MainContainer state={state} />} />
        <Route path="/text" render={() => <TextContainer state={state} />} />
        <Route path="/result" render={() => <FinalPage state={state} />} />
      </Switch>
    </Container>
  );
}

export default App;
