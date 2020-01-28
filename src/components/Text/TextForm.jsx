import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

const TextForm = ({ textPage, handleSubmit, setPrevForm }) => {
  const text = (
    <Form.Group key={textPage.texts[textPage.formNumber].id}>
      <Form.Label>{textPage.texts[textPage.formNumber].label}</Form.Label>
      <Field
        placeholder={textPage.texts[textPage.formNumber].placeholder}
        name={textPage.texts[textPage.formNumber].name}
        component="input"
      />
    </Form.Group>
  );

  const onPrevPage = () => {
    setPrevForm(textPage.formNumber);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {text}
      {textPage.formNumber > 0 && (
        <Button variant="primary" type="button" onClick={onPrevPage}>
          prev
        </Button>
      )}

      {textPage.formNumber < 3 && (
        <Button variant="primary" type="submit">
          next
        </Button>
      )}
    </Form>
  );
};

export const TextFormRedux = reduxForm({
  form: 'text',
})(TextForm);
