import React from 'react';
import styles from './Header.module.css';

const Header = ({heading}) => {
    return (
        <div className={styles.header__container}>
            <div className={styles["header__img-container"]}>
                <img src="/header/arrow-left.png" alt="developer"/>
             </div>   
            <h1>{heading}</h1>
            <div className={styles["header__img-container"]}>
                <img src="/header/arrow-right.png" alt="developer"/>
             </div>   
        </div>
    );
};

export default Header;