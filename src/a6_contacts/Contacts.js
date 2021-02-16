import React from 'react'
import styles from './Contacts.module.scss';
import stylesContainer from '../common/styles/Container.module.scss'
import Form from "./form/Form/Form";
import Title from "../common/components/title/Title";
import ContactsData from "./form/ContactsData/ContactsData";


function Contacts() {
    return (
        <div className={styles.contactsBlock} id="contacts">
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={'GET IN TOUCH'}/>
                <div className={styles.formAndData}>
                    <ContactsData/>
                    <Form/>
                </div>

            </div>
        </div>
    );
}

export default Contacts;