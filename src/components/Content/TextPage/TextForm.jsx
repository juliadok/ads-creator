import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

/**
 * @see https://github.com/redux-form/redux-form/issues/2917#issuecomment-300914971
 */
const FieldInput = ({ input, type, placeholder }) => {
  return <Form.Control type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />;
};

const TextForm = ({ ad, formsPage, handleSubmit, onPrevPage, maxFormCount }) => {
  const text = (
    <Form.Group>
      <Form.Label>{ad.blocks[formsPage.formNumber].label}</Form.Label>
      <Field
        placeholder={ad.blocks[formsPage.formNumber].placeholder}
        name={`${formsPage.formNumber}`}
        component={FieldInput}
        type="text"
      />
    </Form.Group>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {text}
      <Row>
        <Col>
          {formsPage.formNumber > 0 && formsPage.formNumber < maxFormCount && (
            <Button variant="dark" type="button" onClick={onPrevPage} className="mr-3">
              Previous
            </Button>
          )}

          {formsPage.formNumber < maxFormCount && (
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
