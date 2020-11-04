import React from 'react'
import styles from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}> Skills </h2>
                <div className={styles.skills}>
                    <Skill title ={"First Step"} description={"here will be different text"}/>
                    <Skill title ={"Second Step"}description={".....here too"}/>
                    <Skill title ={"Third Step"}description={"...and here"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;