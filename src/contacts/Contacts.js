import React from 'react'
import styles from './Contacts.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Form from "./form/Form";
import Title from "../common/components/title/Title";
import DataContacts from "./form/DataContacts";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={'GET IN TOUCH'}/>
                <div className={styles.formAndData}>
                    <DataContacts/>
                    <Form/>
                </div>

            </div>
        </div>
    );
}

export default Contacts;