import React from 'react'
import styles from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import Button from "../common/button/Button";


function Skills() {
    return (
        <div className={'ourNth'}>
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    <Skill title ={"First Step"} description={"here will be different text"}/>
                    <Skill title ={"Second Step"}description={".....here too"}/>
                    <Skill title ={"Third Step"}description={"...and here"}/>
                    <Skill title ={"Next Step"}description={"..."}/>
                    <Skill title ={"Next Step"}description={"..."}/>
                    <Skill title ={"Next Step"}description={"..."}/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;