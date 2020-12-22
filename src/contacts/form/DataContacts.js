import React from 'react'
import styles from './DataContacts.module.css';



function DataContacts() {
    return (
            <div className={styles.data}>
                <ul>
                    <li>
                    <h4>Phone</h4>
                        <a  href="tel:+88-669-658-6586">+375-29-807-50-50</a>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <a href>ekaterinan112@gmail.com</a>
                    </li>
                    <li>
                        <h4>My Location</h4>
                        <span>Minsk, Belarus</span>
                    </li>
                </ul>

            </div>
    );
}

export default DataContacts;