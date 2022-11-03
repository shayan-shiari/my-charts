import React from 'react';

//Images 
import logo1 from '../assets/images/tech_logo.png';
import logo2 from '../assets/images/maher_logo.png';
import logo3 from '../assets/images/ava.png';

//Style 
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <img src={logo1} alt="logo1" className={styles.one}/>
                <img src={logo2} alt="logo2" className={styles.two} />
            </div>
            <img src={logo3} alt="logo3" className={styles.three} />
        </div>
    );
};

export default Header;