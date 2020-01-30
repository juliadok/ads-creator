import React from 'react';
import { Button, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Preview from '../Main/Preview/Preview';
import { TextFormRedux } from './TextForm/TextForm';
// import FinalPage from '/FinalPage/FinalPage';

const TextPage = ({ textPage, templatesPage, setUserData, setNextForm, setPrevForm }) => {
  const onSubmit = (formData) => {
    setUserData(formData);
    setNextForm(textPage.formNumber);
  };

  const onPrevPage = () => {
    setPrevForm(textPage.formNumber);
  };

  return (
    <>
      {textPage.formNumber !== 3 ? (
        <Row>
          <Col xs={9}>
            <p>Here you can make your personal template</p>
            <TextFormRedux textPage={textPage} onSubmit={onSubmit} onPrevPage={onPrevPage} />
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
        <Link to="/result">
          <Button variant="primary" as="span" block>
            Show final result
          </Button>
        </Link>
      )}
    </>
  );
};

export default TextPage;
