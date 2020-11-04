import React from 'react'
import styles from './Contacts.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Form from "./form/Form";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}> Contacts </h2>
                <Form/>
                <button>SEND</button>
            </div>
        </div>
    );
}

export default Contacts;