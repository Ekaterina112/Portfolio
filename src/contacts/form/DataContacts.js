import React from 'react'
import styles from './DataContacts.module.css';



function DataContacts() {
    return (
            <div className={styles.data}>
                <ul>
                    <li>
                    <h4>Phone</h4>
                        <a className="montserrat weight-regular" href="tel:+88-669-658-6586">+88 669 658 6586</a>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <a href></a>
                    </li>
                    <li>
                        <h4>Our Location</h4>
                        <span></span>
                    </li>
                </ul>

            </div>
    );
}

export default DataContacts;