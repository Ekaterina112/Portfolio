import React from 'react'
import styles from './RunningLine.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


function RunningLine() {
    return (
        <div className={styles.runningLineBlock}>
            <p>Let's build something great together</p>
        </div>
    );
}

export default RunningLine;