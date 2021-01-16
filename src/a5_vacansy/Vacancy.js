import React from 'react'
import styles from './Vacansy.module.scss';
import stylesContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Button from "../common/button/Button";


function Vacancy() {
    return (
            <div className={styles.vacancyBlock}>
                <div className={`${stylesContainer.container} ${styles.vacancyContainer}`}>
                    <Title title={'I Am Available For Freelance'}/>
                    <Button title={" HIRE ME"}/>
                </div>
            </div>
    );
}

export default Vacancy;