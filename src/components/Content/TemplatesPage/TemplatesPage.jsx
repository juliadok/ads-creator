import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as axios from 'axios';
import TemplatesBar from './TemplatesBar/TemplatesBar';
import Ad from '../Ad/Ad';

class TemplatesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [],
    };
  }

  async componentDidMount() {
    const { data: templates } = await axios.get('/templates.json');
    this.setState({ templates });
  }

  render() {
    const { templates } = this.state;
    const { template, setAd } = this.props;
    return (
      <>
        <p>
          <b>Step 1. </b>Choose a template:
        </p>
        <Row>
          <Col xs={12} md={8}>
            <TemplatesBar templates={templates} setAd={setAd} />
          </Col>
          <Col md={4} className="d-none d-sm-block">
            <Ad ad={template.ad} values={template.ad.blocks.map(({ text }) => text)} />
          </Col>
        </Row>
      </>
    );
  }
}

export default TemplatesPage;
