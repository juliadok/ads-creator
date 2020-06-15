import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TemplatesPageContainer from './TemplatesPage/TemplatesPageContainer';
import TextPageContainer from './TextPage/TextPageContainer';
import ResultPageContainer from './ResultPage/ResultPageContainer';

const Content = ({ state }) => {
  return (
    <Container className="flex-fill pt-3">
      <Switch>
        <Route exact path="/" render={() => <TemplatesPageContainer state={state} />} />
        <Route path="/text" render={() => <TextPageContainer state={state} />} />
        <Route path="/result" render={() => <ResultPageContainer state={state} />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Container>
  );
};

export default Content;
