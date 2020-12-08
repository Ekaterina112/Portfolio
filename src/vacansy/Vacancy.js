import React from 'react'
import styles from './Vacansy.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


function Vacancy() {
    return (
        <div className={'ourNth'}>
            <div className={styles.vacancyBlock}>
                <div className={`${stylesContainer.container} ${styles.vacancyContainer}`}>
                    <Title title={'I Am Available For Freelance'}/>
                    <button className={styles.button}>HIRE ME</button>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;