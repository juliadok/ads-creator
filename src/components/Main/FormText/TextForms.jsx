import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TextForms = ({ forms }) => {
  const form = forms.map((formElement) => (
    <Form.Group key={formElement.id}>
      <Form.Label>{formElement.label}</Form.Label>
      <Form.Control placeholder={formElement.placeholder} />
    </Form.Group>
  ));

  return (
    <div>
      <Form>{form}</Form>
      <Button variant="primary" type="submit">
        Previous
      </Button>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </div>
  );
};

export default TextForms;
