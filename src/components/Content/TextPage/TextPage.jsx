import React from 'react';
import { Col, Row, ProgressBar } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Ad from '../Ad/Ad';
import { TextFormRedux } from './TextForm';

const TextPage = ({ formsPage, ad, resetForms, setUserData, setNextForm, setPrevForm }) => {
  const onSubmit = (formData = '') => {
    const formValue = formData[`${formsPage.formNumber}`] || '';

    setUserData(formValue);
    setNextForm(formsPage.formNumber);
  };

  const onPrevPage = () => {
    setPrevForm(formsPage.formNumber);
  };

  const maxFormCount = ad.blocks.length;

  const progress = Math.round((formsPage.formNumber / maxFormCount) * 100);

  if (formsPage.formNumber === maxFormCount) {
    resetForms();
    return <Redirect to="/result" />;
  }

  return (
    <>
      <p>
        <b>Step 2.</b> Сustomize your personal template:
      </p>
      <Row>
        <Col xs={12} md={8} mb={3} className="mb-3">
          <ProgressBar className="mb-3" variant="info" now={progress} label={`${progress}%`} />
          <TextFormRedux
            ad={ad}
            formsPage={formsPage}
            onSubmit={onSubmit}
            onPrevPage={onPrevPage}
            maxFormCount={maxFormCount}
          />
        </Col>
        <Col xs={12} md={4}>
          <Ad ad={ad} values={formsPage.userData} />
        </Col>
      </Row>
    </>
  );
};

export default TextPage;
