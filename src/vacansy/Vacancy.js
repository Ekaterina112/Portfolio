import React from 'react'
import styles from './Vacansy.module.css';
import stylesContainer from '../common/styles/Container.module.css'


function Vacancy() {
    return (
        <div className={styles.vacancyBlock}>
            <div className={`${stylesContainer.container} ${styles.vacancyContainer}`}>
                <h2 className={styles.title}> I Am Available For Freelancer </h2>
                <button>HIRE ME</button>
            </div>

        </div>
    );
}

export default Vacancy;