import React from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
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
    const { setAd } = this.props;

    this.setState({ templates });
    setAd(templates[0]);
  }

  render() {
    const { templates } = this.state;
    const { template, setAd } = this.props;

    return (
      <>
        <p>
          <b>Step 1.</b> Choose a template:
        </p>
        <Row>
          <Col xs={12} md={8}>
            <TemplatesBar current={template.ad} templates={templates} setAd={setAd} />
          </Col>
          <Col md={4} className="d-none d-sm-block">
            {template.ad && (
              <div className="position-sticky" style={{ top: 50 }}>
                <Ad ad={template.ad} values={template.ad.blocks.map(({ placeholder }) => placeholder)} />
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default TemplatesPage;
