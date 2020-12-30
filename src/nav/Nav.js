import React from 'react'
import s from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className={s.nav}>
            <a href> Home </a>
            <a href> Skills </a>
            <a href> Portfolio</a>
            <a href> Contacts </a>
            <a href >
                <FontAwesomeIcon icon={faBars} className={s.icon}/>
            </a>
        </div>
    );
}

export default Nav;