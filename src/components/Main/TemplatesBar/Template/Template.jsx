import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Template.module.css';

const Template = ({ url }) => {
  return (
    <>
      <Link to="/text">
        <img className={styles.templatePicture} src={url} alt="template" />
      </Link>
    </>
  );
};

export default Template;
