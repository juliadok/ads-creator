import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Ad from '../Ad/Ad';

const ResultPage = ({ formsPage, ad }) => {
  const preview = React.useRef(null);
  const handleClick = async () => {
    preview.current.save();
  };

  return (
    <>
      <p>
        <b>Step 3. </b>Save the result:
      </p>
      <div>
        <Row>
          <Col xs="12" md="6" lg="4">
            <Ad ref={preview} ad={ad} values={formsPage.userData} />
          </Col>
        </Row>
        <Row>
          <Col className="py-3">
            <Button variant="dark" onClick={handleClick}>
              Download
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ResultPage;
