import React from 'react'
import styles from './Contacts.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Form from "./form/Form";
import Title from "../common/title/Title";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={'GET IN TOUCH'}/>
                <Form/>
            </div>
        </div>
    );
}

export default Contacts;