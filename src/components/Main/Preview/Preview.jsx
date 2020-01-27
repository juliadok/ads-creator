import React from 'react';
import styles from './Preview.module.css';

const Preview = ({ preview }) => {
  return (
    <div className={styles.Preview}>
      <p>Preview</p>
      <img src={preview} alt="preview" />
    </div>
  );
};

export default Preview;
