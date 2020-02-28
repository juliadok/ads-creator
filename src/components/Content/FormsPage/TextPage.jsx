import React from 'react';
import { Button, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ad from '../Ad/Ad';
import { TextFormRedux } from './TextForm/TextForm';

const TextPage = ({ formsPage, ad, setUserData, setNextForm, setPrevForm }) => {
  const onSubmit = (formData) => {
    const formValue = Object.values(formData);
    setUserData(formValue);
    setNextForm(formsPage.formNumber);
  };

  const onPrevPage = () => {
    setPrevForm(formsPage.formNumber);
  };

  return (
    <>
      <p>
        <b>Step 2. </b>Сustomize your personal template:
      </p>
      {formsPage.formNumber !== 3 ? (
        <Row>
          <Col xs={12} md={8}>
            <TextFormRedux formsPage={formsPage} onSubmit={onSubmit} onPrevPage={onPrevPage} />
            <br />
            <ProgressBar
              className="mb-3"
              variant="info"
              now={formsPage.progress[formsPage.formNumber]}
              label={`${formsPage.progress[formsPage.formNumber]}%`}
            />
          </Col>
          <Col xs={12} md={4}>
            <Ad ad={ad} values={formsPage.userData} />
          </Col>
        </Row>
      ) : (
        <Link to="/result">
          <ProgressBar
            variant="info"
            now={formsPage.progress[formsPage.formNumber]}
            label={`${formsPage.progress[formsPage.formNumber]}%`}
          />
          <Button variant="dark" as="span" className="mt-3">
            Show final result
          </Button>
        </Link>
      )}
    </>
  );
};

export default TextPage;
