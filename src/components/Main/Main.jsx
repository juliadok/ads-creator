import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import TemplatesBar from './TemplatesBar/TemplatesBar';
import TextForms from './FormText/TextForms';
import Preview from './Preview/Preview';

const Main = ({ templatesPage, setPreview }) => {
  return (
    <Row>
      <Col xs={9}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TemplatesBar urls={templatesPage.urls} setPreview={setPreview} preview={templatesPage.preview} />
            )}
          />
          <Route path="/text" render={() => <TextForms forms={templatesPage.forms} />} />
        </Switch>
      </Col>
      <Col xs={1} />
      <Col xs={2}>
        <Preview preview={templatesPage.preview} urls={templatesPage.urls} />
      </Col>
    </Row>
  );
};

export default Main;
