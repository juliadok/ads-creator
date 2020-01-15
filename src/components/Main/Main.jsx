import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TemplatesBar from './TemplatesBar/TemplatesBar';
import TextForms from './FormText/TextForms';

const Main = ({ templatesPage }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <TemplatesBar urls={templatesPage.urls} />} />
      <Route path="/text" render={() => <TextForms forms={templatesPage.forms} />} />
    </Switch>
  );
};

export default Main;
