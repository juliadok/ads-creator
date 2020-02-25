import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TemplatesPageContainer from './TemplatesPage/TemplatesPageContainer';
import TextPageContainer from './FormsPage/TextPageContainer';
import ResultPageContainer from './ResultPage/ResultPageContainer';

const Content = ({ state }) => {
  return (
    <Container className="flex-fill pt-3">
      <Switch>
        <Route exact path="/" render={() => <TemplatesPageContainer state={state} />} />
        <Route path="/text" render={() => <TextPageContainer state={state} />} />
        <Route path="/result" render={() => <ResultPageContainer state={state} />} />
      </Switch>
    </Container>
  );
};

export default Content;
