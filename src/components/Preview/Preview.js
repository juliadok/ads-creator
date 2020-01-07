import React from 'react';
import styles from './Preview.module.css';

const Preview = (props) => {
    return (
        <div className = {styles.Preview}>
            <p>Preview:</p>
            <img src = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg' alt = 'medicine'/>
        </div>
    )
}

export default Preview;