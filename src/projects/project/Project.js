import React from 'react'
import styles from './Project.module.css';


function Project(props) {
    return (
        <div className={`${styles.project} ${styles.item}`}>
            <div className={styles.img} style={props.style}>
                <h3>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
                <a href={props.link}>
                    <button>view project</button>
                </a>
            </div>
        </div>
    );
}

export default Project;