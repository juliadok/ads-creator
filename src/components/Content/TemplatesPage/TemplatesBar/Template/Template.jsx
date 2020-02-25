import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import styles from './Template.module.css';

const Template = ({ url, blocks, setAd }) => {
  const onSetAd = () => {
    setAd(url, blocks);
  };

  return (
    <Col xs={12} md={6} lg={4}>
      <Button variant="link" onClick={onSetAd} className={`mb-3 ${styles.wrapper}`} block>
        <Image src={url} alt="template" className={styles.image} />
      </Button>
    </Col>
  );
};

export default Template;
