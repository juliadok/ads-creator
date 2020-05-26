import React from 'react';
import { Row, Col, ProgressBar, Button } from 'react-bootstrap';
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

  const maxFormCount = formsPage.texts.length;

  return (
    <>
      <p>
        <b>Step 2. </b>Сustomize your personal template:
      </p>
      <Row>
        <Col xs={12} md={8}>
          <ProgressBar
            className="mb-3"
            variant="info"
            now={formsPage.progress[formsPage.formNumber]}
            label={`${formsPage.progress[formsPage.formNumber]}%`}
          />
          {formsPage.formNumber !== maxFormCount ? (
            <TextFormRedux
              formsPage={formsPage}
              onSubmit={onSubmit}
              onPrevPage={onPrevPage}
              maxFormCount={maxFormCount}
            />
          ) : (
            <Link to="/result">
              <Button variant="dark" type="button">
                Show final result
              </Button>
            </Link>
          )}
          <br />
        </Col>
        <Col xs={12} md={4}>
          <Ad ad={ad} values={formsPage.userData} />
        </Col>
      </Row>
    </>
  );
};

export default TextPage;
