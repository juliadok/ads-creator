import React from 'react';
import Template from './Template/Template';
import styles from './TemplatesBar.module.css';

let TemplatesBar = (props) => {
    let TemplateElement = props.urls.map(u => <Template url={u.url} key = {u.id} id={u.id} />);
    
    return (
        <div className = {styles.TemplatesBar}>
            <p>Choose a template:</p>
            { TemplateElement }
        </div>
    )
}

export default TemplatesBar;