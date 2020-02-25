import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

const TextForm = ({ formsPage, handleSubmit, onPrevPage }) => {
  const text = (
    <Form.Group key={formsPage.texts[formsPage.formNumber].id}>
      <Form.Label>{formsPage.texts[formsPage.formNumber].label}</Form.Label>
      <Field
        placeholder={formsPage.texts[formsPage.formNumber].placeholder}
        name={formsPage.texts[formsPage.formNumber].name}
        component="input"
      />
    </Form.Group>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {text}
      <Row>
        <Col>
          {formsPage.formNumber > 0 && (
            <Button variant="dark" type="button" onClick={onPrevPage} className="mr-3">
              Previous
            </Button>
          )}

          {formsPage.formNumber < 3 && (
            <Button variant="dark" type="submit">
              Next
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export const TextFormRedux = reduxForm({
  form: 'text',
})(TextForm);
