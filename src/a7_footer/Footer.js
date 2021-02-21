import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    let items=[{href:'https://github.com/Ekaterina112',title:'git'},{href:'linkedIn',title:'linkedIn'},
        {href:'https://ekaterinan112@gmail.com2',title:'email'},{href:'https://www.instagram.com/naumchik_katerina',title:'instagram'},]
    return (
        <div className={styles.footerContainer}>
            <p className={styles.copyRightBlock}>© 2021, All Rights Reserved.</p>
            <ul>
                {items.map(e=>  <li><a href={e.href} target="_blank"  rel="noreferrer">{e.title}</a></li>)}
            </ul>
        </div>
    );
}

export default Footer;