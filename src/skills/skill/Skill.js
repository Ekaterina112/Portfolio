import React from 'react'
import styles from './Skill.module.css';


function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>here will be icon</div>
            <h5>{props.title}</h5>
            <hr className={styles.hR}/>
                <p>{props.description}</p>
        </div>
);
}

export default Skill;