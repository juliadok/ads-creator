import React from 'react';
import Template from './Template/Template';
import styles from './TemplatesBar.module.css';

const TemplatesBar = (props) => {
    return (
        <div className = {styles.TemplatesBar}>
            <p>Choose a template:</p>
            <Template />
        </div>
    )
}

export default TemplatesBar;