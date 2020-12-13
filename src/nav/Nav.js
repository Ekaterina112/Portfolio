import React from 'react'
import styles from './Nav.module.css';

function Nav() {
    return (
        <div className={styles.nav}>
            <a href> Home </a>
            <a href> Skills </a>
            <a href> Portfolio</a>
            <a href> Contacts </a>
            <a href className={styles.menu}></a>
        </div>
    );
}

export default Nav;