import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as axios from 'axios';
import TemplatesBar from './TemplatesBar/TemplatesBar';
import Ad from '../Ad/Ad';

class TemplatesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  async componentDidMount() {
    const { data: urls } = await axios.get('/templates.json');
    this.setState({ urls });
  }

  render() {
    const { urls } = this.state;
    const { template, setAd } = this.props;
    return (
      <>
        <p>
          <b>Step 1. </b>Choose a template:
        </p>
        <Row>
          <Col xs={12} md={8}>
            <TemplatesBar urls={urls} setAd={setAd} />
          </Col>
          <Col md={4} className="d-none d-sm-block">
            <Ad ad={template.ad} textBlock={template.textBlock} />
          </Col>
        </Row>
      </>
    );
  }
}

export default TemplatesPage;
