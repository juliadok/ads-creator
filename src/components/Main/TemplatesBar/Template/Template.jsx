import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Template.module.css';

const Template = ({ url, setPreview }) => {
  const onSetPreview = () => {
    setPreview(url);
  };

  return (
    <Button variant="link" onClick={onSetPreview}>
      <img className={styles.templatePicture} src={url} alt="template" />
    </Button>
  );
};

export default Template;
