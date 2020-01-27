import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TemplatesBar from './TemplatesBar/TemplatesBar';
import Preview from './Preview/Preview';

const Main = ({ templatesPage, setPreview }) => {
  return (
    <Row>
      <Col xs={9}>
        <TemplatesBar urls={templatesPage.urls} setPreview={setPreview} preview={templatesPage.preview} />
      </Col>
      <Col xs={3}>
        <Preview preview={templatesPage.preview} />
      </Col>
    </Row>
  );
};

export default Main;
