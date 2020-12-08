import React from 'react'
import styles from './Contacts.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Form from "./form/Form";
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={'ourNth'}>
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title title={'GET IN TOUCH'}/>
                <Form/>
            </div>
        </div>
        </div>
    );
}

export default Contacts;