import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TextForms = (props) => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your text:</Form.Label>
                    <Form.Control placeholder="Enter email" />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
                Next
            </Button>

        </div>
    )
}

export default TextForms;