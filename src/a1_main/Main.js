import React from 'react'
import styles from './Main.module.scss';
import stylesContainer from '../common/styles/Container.module.scss'
import photo from '../assets/images/photo.jpg';
import Button from "../common/button/Button";

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.greeting}>
                    <h5>Hello, my name is</h5>
                    <h1>Ekaterina Naumchik</h1>
                    <h5>Front-end Developer based in #Minsk</h5>
                    <Button title={"download my cv"}/>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt="it's me"   />
                </div>
            </div>
        </div>
    );
}

export default Main;