import React from 'react'
import styles from './Footer.module.scss';
import stylesContainer from '../common/styles/Container.module.scss'


function Footer() {
    return (
        <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
            <p className={styles.copyRightBlock}>© 2021, All Rights Reserved.</p>
            <ul>
                <li><a href={'git'}>git</a></li>
                <li><a href={'linkedIn'}>linkedIn</a></li>
                <li><a href={'email'}>email</a></li>
                <li><a href={'instagram'}>instagram</a></li>
            </ul>
        </div>
    );
}

export default Footer;