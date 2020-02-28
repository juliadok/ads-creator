import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import styles from './Template.module.css';

const Template = ({ ad, onClick }) => {
  const handleClick = () => {
    onClick(ad);
  };

  return (
    <Col xs={12} md={6} lg={4}>
      <Button variant="link" onClick={handleClick} className={`mb-3 ${styles.wrapper}`} block>
        <Image src={ad.url} alt="template" className={styles.image} />
      </Button>
    </Col>
  );
};

export default Template;
