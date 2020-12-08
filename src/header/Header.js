import React from 'react'
import styles from './Header.module.css';
import Nav from "../nav/Nav";

function Header() {
    //how is it works?
    return ( <div className={`${styles.header} ourNth`}>
            <Nav/>
        </div>
    );
}

export default Header;