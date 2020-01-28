import React from 'react';
import { Button, Row, Col, ProgressBar } from 'react-bootstrap';
import Preview from '../Main/Preview/Preview';
import { TextFormRedux } from './TextForm';

const TextPage = ({ textPage, templatesPage, setUserData, setNextForm, setPrevForm }) => {
  const onSubmit = (formData) => {
    setUserData(formData);
    setNextForm(textPage.formNumber);
  };

  return (
    <>
      {textPage.formNumber !== 3 ? (
        <Row>
          <Col xs={9}>
            <p>Here you can make your personal template</p>
            <TextFormRedux textPage={textPage} onSubmit={onSubmit} setPrevForm={setPrevForm} />
            <br />
            <ProgressBar
              now={textPage.progress[textPage.formNumber]}
              label={`${textPage.progress[textPage.formNumber]}%`}
            />
          </Col>
          <Col xs={3}>
            <Preview preview={templatesPage.preview} />
          </Col>
        </Row>
      ) : (
        <Button variant="primary" type="submit">
          Final result
        </Button>
      )}
    </>
  );
};

export default TextPage;
