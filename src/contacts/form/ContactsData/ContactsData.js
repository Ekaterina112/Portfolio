import React from 'react'
import styles from './ContactsData.module.css';
import { faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import DataBlock from "./DataBlock/DataBlock";



function ContactsData() {
    return (
            <div className={styles.data}>
                <DataBlock iconTitle={faTelegramPlane} contactTitle={'Phone'} data={'+375-29-807-50-50'} a={"tel:+375-29-807-50-50"}/>
                <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'ekaterinan112@gmail.com'} a={""}/>
                <DataBlock iconTitle={faHome} contactTitle={'My Location'} data={'Minsk, Belarus'} a={""}/>
            </div>
    );
}

export default ContactsData;