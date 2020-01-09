import React from 'react';
import styles from './Template.module.css';
import { Link } from 'react-router-dom';

const Template = (props) => {
    return (
        <>
            <Link to = '/text'>
                <img className = {styles.templatePicture} src = {props.url} alt = 'template'/>
            </Link>
        </>
    )
}

export default Template;