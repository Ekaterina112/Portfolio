import React from 'react'
import styles from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1>I am Ekaterina</h1>
                    <p>Beginner Front-end Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Main;