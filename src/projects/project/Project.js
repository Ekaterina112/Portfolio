import React from 'react'
import styles from './Project.module.css';


function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.icon}><a href={props.link}> {props.titleLink}</a></div>
                <h3>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;