import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TemplatesBar from './TemplatesBar/TemplatesBar';
import Ad from '../Ad/Ad';

const TemplatesPage = ({ templatesData, setAd }) => {
  return (
    <>
      <p>
        <b>Step 1.</b> Choose a template:
      </p>
      <Row>
        <Col xs={12} md={8}>
          <TemplatesBar current={templatesData.ad} templates={templatesData.templates} setAd={setAd} />
        </Col>
        <Col md={4} className="d-none d-sm-block">
          {templatesData.ad && (
            <div className="position-sticky" style={{ top: 50 }}>
              <Ad ad={templatesData.ad} values={templatesData.ad.blocks.map(({ placeholder }) => placeholder)} />
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default TemplatesPage;
