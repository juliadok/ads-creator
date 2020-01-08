import React from 'react';
import styles from './Template.module.css';

const Template = (props) => {
    return (
        <div>
            <a href = '/text'>
                <img className = {styles.templatePicture} src = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg' alt = 'medicine'/>
            </a>
            <a href = '/text'>
                <img className = {styles.templatePicture} src = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg' alt = 'medicine'/>
            </a>
            <a href = '/text'>
                <img className = {styles.templatePicture} src = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg' alt = 'medicine'/>
            </a>
        </div>
    )
}

export default Template;