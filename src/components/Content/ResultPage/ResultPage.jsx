import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Ad from '../Ad/Ad';

const saveSvgAsPng = require('save-svg-as-png');

const imageOptions = {
  scale: 0.5,
  excludeCss: true,
};

// eslint-disable-next-line react/prefer-stateless-function
class ResultPage extends React.Component {
  handleClick = async () => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-chart'), 'template.png', imageOptions);
  };

  render() {
    const { formsPage, ad } = this.props;
    return (
      <>
        <p>
          <b>Step 3. </b>Save the result:
        </p>
        <div>
          <Row>
            <Col xs="12" md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
              <Ad ad={ad} values={formsPage.userData} />
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <Button variant="dark" onClick={this.handleClick}>
                Download
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ResultPage;
