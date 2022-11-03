import React from 'react';

//Styles 
import styles from './Side.module.css';

//Images
import img11 from '../assets/images/11.svg';
import img22 from '../assets/images/22.svg';
import img33 from '../assets/images/33.svg';
import img44 from '../assets/images/44.svg';
import img55 from '../assets/images/55.svg';

const Side = () => {
    return (
        <div className={styles.container}>
                <img src={img11} alt="side1" />
                <img src={img22} alt="side2" />
                <img src={img33} alt="side3" />
                <img src={img44} alt="side4" />
                <img src={img55} alt="side5" />
        </div>
    
    );
};

export default Side;